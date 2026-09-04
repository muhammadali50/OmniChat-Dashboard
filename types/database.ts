export type Platform = "instagram" | "facebook";
export type SenderType = "user" | "bot";
export interface Conversation { id: string; platform: Platform; platform_user_id: string; user_name: string | null; user_avatar: string | null; last_message: string | null; last_message_at: string; created_at: string; updated_at: string }
export interface Message { id: string; conversation_id: string; sender_type: SenderType; message: string; created_at: string }
export interface Database { public: { Tables: {
  conversations: { Row: Conversation; Insert: Omit<Conversation, "id" | "created_at" | "updated_at"> & { id?: string; created_at?: string; updated_at?: string }; Update: Partial<Conversation> };
  messages: { Row: Message; Insert: Omit<Message, "id" | "created_at"> & { id?: string; created_at?: string }; Update: Partial<Message> };
} } }
