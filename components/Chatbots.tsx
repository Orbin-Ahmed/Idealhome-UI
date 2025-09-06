"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Send,
  Minimize2,
  Maximize2,
  X,
  Loader,
  Sparkles,
  MessageCircle,
  Paperclip,
} from "lucide-react";
import { getOutput } from "@/helper";
import { Message, N8nRequest, N8nResponse } from "@/types";
import { TypingIndicator } from "./TypingIndicator";
import { ChatBubble } from "./ChatBubble";

interface ChatbotProps {
  webhookUrl?: string;
  sessionId?: string;
  brandColor?: string;
  position?: "bottom-right" | "bottom-left";
  initialMessage?: string;
  quickActions?: string[];
}

const Chatbots: React.FC<ChatbotProps> = ({
  webhookUrl = "YOUR_N8N_WEBHOOK_URL",
  sessionId,
  brandColor = "#57b7c0",
  position = "bottom-right",
  initialMessage = "Hi there! 👋 I'm your AI assistant. How can I help you today?",
  quickActions = ["How can you help?", "Pricing info", "Contact support"],
}) => {
  const [stableSessionId, setStableSessionId] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: "bot", content: initialMessage, timestamp: new Date() },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [dynamicQuickActions, setDynamicQuickActions] =
    useState<string[]>(quickActions);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const posClass = useMemo(
    () => (position === "bottom-left" ? "bottom-4 left-4" : "bottom-4 right-4"),
    [position]
  );

  useEffect(() => {
    try {
      const KEY = "chatbot_session_id";
      const existing =
        typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      const finalId =
        sessionId ||
        existing ||
        `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      setStableSessionId(finalId);
      if (!existing) localStorage.setItem(KEY, finalId);
      if (sessionId && sessionId !== existing)
        localStorage.setItem(KEY, sessionId);
    } catch {
      setStableSessionId(
        sessionId ||
          `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
      );
    }
  }, [sessionId]);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const parseBotPayload = (
    raw: string
  ): { text: string; quicks: string[]; images: string[] } => {
    const fallback = { text: raw, quicks: [], images: [] as string[] };
    try {
      const maybe = JSON.parse(raw);

      if (Array.isArray(maybe)) {
        const first: any = maybe[0] ?? {};
        const text =
          typeof first.output === "string"
            ? first.output
            : String(first.output ?? "");
        const quicks = Array.isArray(first.quick_actions)
          ? first.quick_actions.map((q: unknown) => String(q))
          : [];
        const images = Array.isArray(first.image_urls)
          ? first.image_urls.map((u: unknown) => String(u))
          : [];
        return { text, quicks, images };
      }

      if (maybe && typeof maybe === "object") {
        const obj: any = maybe;
        const text = typeof obj.output === "string" ? obj.output : raw;
        const quicks = Array.isArray(obj.quick_actions)
          ? obj.quick_actions.map((q: unknown) => String(q))
          : [];
        const images = Array.isArray(obj.image_urls)
          ? obj.image_urls.map((u: unknown) => String(u))
          : [];
        return { text, quicks, images };
      }
      return fallback;
    } catch {
      return fallback;
    }
  };

  const isAllowedFile = (file: File): boolean => {
    const type = (file.type || "").toLowerCase();
    const name = file.name.toLowerCase();
    const mimeOk =
      type.startsWith("image/") ||
      type === "application/pdf" ||
      [
        "application/acad",
        "application/x-acad",
        "application/dwg",
        "application/x-dwg",
        "application/x-dxf",
        "image/vnd.dwg",
        "image/vnd.dxf",
      ].includes(type);
    const extOk = /\.(dwg|dxf|dwt|dwfx)$/i.test(name);
    return mimeOk || extOk;
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!isAllowedFile(f)) {
      setFileError(
        "Unsupported file. Allowed: images, PDF, AutoCAD (.dwg/.dxf/.dwt/.dwfx)."
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFileError("");
    setSelectedFile(f);
  };

  const sendMessage = useCallback(
    async (overrideText?: string): Promise<void> => {
      const textToSend = (overrideText ?? inputMessage).trim();

      const fileToSend = selectedFile || null;
      if (!textToSend && !fileToSend) return;
      clearSelectedFile();

      const fileTag = fileToSend ? `\n\n📎 ${fileToSend.name}` : "";
      const userMessage: Message = {
        id: Date.now(),
        type: "user",
        content: textToSend ? `${textToSend}${fileTag}` : fileTag || "(file)",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputMessage("");
      setIsTyping(true);

      try {
        let response: Response;

        if (fileToSend) {
          const form = new FormData();
          form.append("sessionId", stableSessionId);
          form.append("action", "sendMessage");
          form.append("chatInput", textToSend);
          form.append("file", fileToSend, fileToSend.name);
          response = await fetch(webhookUrl, { method: "POST", body: form });
        } else {
          const requestPayload: N8nRequest = {
            sessionId: stableSessionId,
            action: "sendMessage",
            chatInput: textToSend,
          };
          response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestPayload),
          });
        }

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data: N8nResponse = await response.json();
        const rawOutput = getOutput(data) || "";
        const cleaned =
          typeof rawOutput === "string" ? rawOutput.trim() : String(rawOutput);
        const { text, quicks, images } = parseBotPayload(cleaned);
        setDynamicQuickActions(quicks.length ? quicks : []);

        const botMessage: Message = {
          id: Date.now() + 1,
          type: "bot",
          content: text || cleaned || "Sorry, I didn't catch that.",
          timestamp: new Date(),
          images: Array.isArray(images) ? images : [],
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      } catch (error) {
        console.error("Error sending message:", error);
        setIsConnected(false);
        setTimeout(() => {
          const errorMessage: Message = {
            id: Date.now() + 1,
            type: "bot",
            content:
              "I'm having trouble connecting right now. Please try again later.",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, errorMessage]);
          setIsTyping(false);
          setIsConnected(true);
        }, 500);
      }
    },
    [inputMessage, selectedFile, stableSessionId, webhookUrl]
  );

  useEffect(() => {
    const ta = inputRef.current;
    if (!ta) return;
    const maxPx = 5 * 24 + 16;
    const resize = () => {
      ta.style.height = "auto";
      const next = Math.min(ta.scrollHeight, maxPx);
      ta.style.height = `${next}px`;
    };
    resize();
    ta.addEventListener("input", resize);
    return () => ta.removeEventListener("input", resize);
  }, [inputRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickAction = (action: string) => sendMessage(action);

  const showQuick =
    dynamicQuickActions.length > 0 && !isTyping && !inputMessage.trim();

  const QuickActionsDock: React.FC = () => {
    if (!showQuick) return null;
    return (
      <div className="mt-3 animate-fadeIn">
        <div
          className="flex flex-wrap gap-2"
          aria-label="Suggested quick replies"
        >
          {dynamicQuickActions.map((action, index) => (
            <button
              key={`${action}-${index}`}
              onClick={() => handleQuickAction(action)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ ["--tw-ring-color" as any]: brandColor }}
              title={action}
            >
              <span className="truncate max-w-[180px]">{action}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className={`fixed ${posClass} z-50`}>
        {!isOpen && (
          <div className="relative">
            <button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-30"
              style={{
                background: `linear-gradient(135deg, ${brandColor}, #4a9da5)`,
                ["--tw-ring-color" as any]: brandColor,
              }}
            >
              <div className="relative">
                <MessageCircle size={28} className="text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div
                className="absolute inset-0 rounded-full pulse-ring border-2 border-white opacity-30"
                style={{ borderColor: brandColor }}
              />
            </button>

            <div className="absolute -top-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
              <div className="flex items-center gap-2">
                <Sparkles size={14} /> Chat with AI Assistant
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </div>
          </div>
        )}

        {isOpen && (
          <div
            className={
              `bg-white rounded-3xl shadow-2xl border border-gray-200/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden
               w-[min(95vw,420px)] max-h-[90vh] flex flex-col` +
              (isMinimized ? " h-20" : " h-[600px] sm:h-[min(75vh,680px)]")
            }
          >
            <div
              className="flex items-center justify-between p-5 rounded-t-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${brandColor}, #4a9da5)`,
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12" />
              </div>

              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg tracking-tight">
                    AI Assistant
                  </h3>
                  <div className="text-white/90 text-sm flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isConnected ? "bg-green-400" : "bg-red-400"
                      } animate-pulse`}
                    />
                    {isConnected ? "Online" : "Reconnecting..."}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 relative z-10">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {isMinimized ? (
                    <Maximize2 size={18} className="text-white" />
                  ) : (
                    <Minimize2 size={18} className="text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden relative bg-gradient-to-b from-gray-50/50 to-white">
                  <div className="p-5 pb-2 transition-all duration-300">
                    {messages.map((message) => (
                      <ChatBubble key={message.id} message={message} />
                    ))}
                    {isTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                    <QuickActionsDock />
                  </div>
                </div>

                <div className="p-5 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm rounded-b-3xl">
                  {/* <QuickActionsDock /> */}

                  {selectedFile && (
                    <div className="flex items-center justify-between gap-2 px-3 py-2 mb-2 bg-gray-100 border border-gray-200 rounded-xl text-xs text-gray-700">
                      <span className="truncate">{selectedFile.name}</span>
                      <button
                        onClick={clearSelectedFile}
                        className="p-1 rounded-full hover:bg-gray-200"
                        aria-label="Remove file"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {fileError && (
                    <div className="text-xs text-red-600 mb-2">{fileError}</div>
                  )}

                  <div className="flex items-end space-x-3">
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,application/pdf,.dwg,.dxf,.dwt,.dwfx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isTyping || !isConnected || !!selectedFile}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title={
                          selectedFile
                            ? "Only one file at a time"
                            : "Attach file"
                        }
                      >
                        <Paperclip size={20} />
                      </button>
                    </div>

                    <div className="flex-1 relative">
                      <textarea
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="w-full px-5 py-3 bg-gray-100/80 backdrop-blur-sm rounded-2xl border-2 border-transparent resize-none focus:outline-none focus:border-opacity-50 text-sm max-h-32 min-h-[48px] text-gray-800 placeholder-gray-500 transition-all duration-200 hover:bg-gray-100"
                        style={{ ["--tw-border-color" as any]: brandColor }}
                        rows={1}
                        disabled={!isConnected}
                      />
                    </div>

                    <button
                      onClick={() => sendMessage()}
                      disabled={
                        (!inputMessage.trim() && !selectedFile) ||
                        isTyping ||
                        !isConnected
                      }
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-30"
                      style={{
                        background: `linear-gradient(135deg, ${brandColor}, #4a9da5)`,
                        ["--tw-ring-color" as any]: brandColor,
                      }}
                    >
                      {isTyping ? (
                        <Loader size={20} className="animate-spin" />
                      ) : (
                        <Send size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbots;
