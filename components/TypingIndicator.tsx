import { Bot } from "lucide-react";

export const TypingIndicator: React.FC = () => (
  <div className="flex justify-start mb-4 animate-fadeIn">
    <div className="flex items-end">
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full mr-3 flex items-center justify-center shadow-md"
        style={{
          background: `linear-gradient(135deg, #57b7c0, #4a9da5)`,
        }}
      >
        <Bot size={18} className="text-white" />
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);
