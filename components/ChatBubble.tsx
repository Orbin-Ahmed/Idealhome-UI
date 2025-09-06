import React from "react";
import { Bot, User } from "lucide-react";
import { Message } from "@/types";
import { ImageStrip } from "./ImageStrip";

export const stripUrlsFromText = (text: string, hasImages: boolean) => {
  if (!text) return text;
  let out = text.replace(/^\s*Gallery Images:\s*$/gim, "");
  if (hasImages) {
    out = out.replace(/^(https?:\/\/\S+|www\.[^\s)]+)\s*$/gim, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
};

export const ChatBubble: React.FC<{
  message: Message;
  brandColor?: string;
  formatTime?: (d: Date) => string;
}> = ({
  message,
  brandColor = "#57b7c0",
  formatTime = (d) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
}) => {
  const hasImages = !!message.images?.length;
  const text =
    message.type === "bot"
      ? stripUrlsFromText(message.content, hasImages)
      : message.content;

  return (
    <div
      className={`flex ${
        message.type === "user" ? "justify-end" : "justify-start"
      } mb-4 animate-fadeIn`}
    >
      <div
        className={`flex ${
          message.type === "user" ? "flex-row-reverse" : "flex-row"
        } items-end max-w-[85%]`}
      >
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
            message.type === "user"
              ? "bg-gradient-to-br from-blue-500 to-purple-600 ml-3"
              : "mr-3"
          }`}
          style={
            message.type === "bot"
              ? {
                  background: `linear-gradient(135deg, ${brandColor}, #4a9da5)`,
                }
              : undefined
          }
        >
          {message.type === "user" ? (
            <User size={18} className="text-white" />
          ) : (
            <Bot size={18} className="text-white" />
          )}
        </div>

        <div
          className={`relative px-4 py-3 rounded-2xl shadow-sm ${
            message.type === "user"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
              : "bg-white border border-gray-200 text-gray-800 rounded-bl-md hover:shadow-md transition-shadow duration-200"
          }`}
        >
          {text && (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {text}
            </p>
          )}

          {message.type === "bot" && hasImages ? (
            <ImageStrip images={message.images!} />
          ) : null}

          <div
            className={`text-xs mt-2 ${
              message.type === "user" ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};
