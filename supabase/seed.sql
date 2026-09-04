insert into public.conversations (id,platform,platform_user_id,user_name,last_message,last_message_at) values
('11111111-1111-4111-8111-111111111111','instagram','ig_ali_khan','Ali Khan','Perfect, thank you!','2026-09-04T09:42:00Z'),
('22222222-2222-4222-8222-222222222222','facebook','fb_ahmed','Ahmed','Your order is on its way.','2026-09-04T08:18:00Z'),
('33333333-3333-4333-8333-333333333333','instagram','ig_sara','Sara','Do you deliver to Lahore?','2026-09-03T17:05:00Z') on conflict (id) do nothing;
insert into public.messages (conversation_id,sender_type,message,created_at) values
('11111111-1111-4111-8111-111111111111','user','Hi! Can you tell me about your plans?','2026-09-04T09:35:00Z'),('11111111-1111-4111-8111-111111111111','bot','The Growth plan would be a great fit.','2026-09-04T09:41:00Z'),('11111111-1111-4111-8111-111111111111','user','Perfect, thank you!','2026-09-04T09:42:00Z'),
('22222222-2222-4222-8222-222222222222','user','Can I get an update on order #2048?','2026-09-04T08:14:00Z'),('22222222-2222-4222-8222-222222222222','bot','Your order is on its way.','2026-09-04T08:18:00Z'),
('33333333-3333-4333-8333-333333333333','user','Hello, I love the new collection!','2026-09-03T16:56:00Z'),('33333333-3333-4333-8333-333333333333','bot','Thank you, Sara! Is there anything I can help you find?','2026-09-03T16:57:00Z'),('33333333-3333-4333-8333-333333333333','user','Do you deliver to Lahore?','2026-09-03T17:05:00Z');
