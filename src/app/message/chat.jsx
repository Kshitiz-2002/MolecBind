"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "LKABHQ.n-X87A:_8z07IdiJvnhnI2MsJvP0Dhq3qOblrTES8xPaq805TQ",
  });
  return <ChatBox />;
}