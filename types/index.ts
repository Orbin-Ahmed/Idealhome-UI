export interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  metadata?: { confidence?: number; agentId?: string };
  images?: string[];
}

export interface N8nRequest {
  sessionId: string;
  action: string;
  chatInput: string;
}

export type N8nResponse = { output: string } | { output: string }[];
