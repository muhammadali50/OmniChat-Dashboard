import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Chatbot Dashboard", description: "Messenger and Instagram conversation history" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
