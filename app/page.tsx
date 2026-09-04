import { ConversationDashboard } from "@/components/conversation-dashboard";
import { DashboardShell } from "@/components/dashboard-shell";
import { getConversations } from "@/lib/data";
import type { Conversation } from "@/types/database";
export const dynamic = "force-dynamic";
export default async function Home() {
  let conversations: Conversation[] = []; let demo = false; let unavailable = false;
  try { ({ data: conversations, demo } = await getConversations()); } catch { unavailable = true; }
  return <DashboardShell>{unavailable ? <div className="grid h-full place-items-center p-8 text-center"><div><h1 className="text-xl font-bold">Unable to load conversations</h1><p className="mt-2 text-sm text-slate-500">Check your Supabase credentials and database schema, then refresh.</p></div></div> : <ConversationDashboard initialConversations={conversations} demo={demo} />}</DashboardShell>;
}
