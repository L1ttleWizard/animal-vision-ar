import { CHATS } from "@/data/chats";
import { ChatThreadClient } from "./ChatThreadClient";

export function generateStaticParams() {
  return CHATS.map((c) => ({ id: c.id }));
}

export const dynamicParams = false;

export default async function ChatThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatThreadClient id={id} />;
}
