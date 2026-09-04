import type { Conversation, Message } from "@/types/database";
export const mockConversations: Conversation[] = [
  { id:"11111111-1111-4111-8111-111111111111", platform:"instagram", platform_user_id:"ig_ali_khan", user_name:"Ali Khan", user_avatar:null, last_message:"Perfect, thank you!", last_message_at:"2026-09-04T09:42:00Z", created_at:"2026-09-01T10:00:00Z", updated_at:"2026-09-04T09:42:00Z" },
  { id:"22222222-2222-4222-8222-222222222222", platform:"facebook", platform_user_id:"fb_ahmed", user_name:"Ahmed", user_avatar:null, last_message:"Your order is on its way.", last_message_at:"2026-09-04T08:18:00Z", created_at:"2026-09-02T11:30:00Z", updated_at:"2026-09-04T08:18:00Z" },
  { id:"33333333-3333-4333-8333-333333333333", platform:"instagram", platform_user_id:"ig_sara", user_name:"Sara", user_avatar:null, last_message:"Do you deliver to Lahore?", last_message_at:"2026-09-03T17:05:00Z", created_at:"2026-09-03T16:55:00Z", updated_at:"2026-09-03T17:05:00Z" }
];
export const mockMessages: Message[] = [
  ["m1",0,"user","Hi! Can you tell me about your plans?","09:35"],["m2",0,"bot","Of course! We have Starter, Growth, and Business plans. What size is your team?","09:36"],["m3",0,"user","We are a team of 8.","09:39"],["m4",0,"bot","The Growth plan would be a great fit. It supports up to 15 team members.","09:41"],["m5",0,"user","Perfect, thank you!","09:42"],
  ["m6",1,"user","Can I get an update on order #2048?","08:14"],["m7",1,"bot","I found it! Your order left our warehouse this morning.","08:16"],["m8",1,"bot","Your order is on its way.","08:18"],
  ["m9",2,"user","Hello, I love the new collection!","16:56"],["m10",2,"bot","Thank you, Sara! Is there anything I can help you find?","16:57"],["m11",2,"user","Do you deliver to Lahore?","17:05"]
].map(([id,index,sender,message,clock]) => ({ id: String(id), conversation_id: mockConversations[Number(index)].id, sender_type: sender as "user"|"bot", message: String(message), created_at: `2026-09-0${Number(index) === 2 ? 3 : 4}T${clock}:00Z` }));
