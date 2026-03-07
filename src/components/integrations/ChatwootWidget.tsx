"use client";

import { useEffect } from "react";
import { CHATWOOT_URL } from "@/lib/constants";

export default function ChatwootWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${CHATWOOT_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      (window as Record<string, unknown>).chatwootSettings = {
        type: "standard",
        launcherTitle: "Chat with us",
      };
      const w = window as Record<string, unknown>;
      if (typeof w.chatwootSDK === "object" && w.chatwootSDK !== null) {
        (w.chatwootSDK as { run: (opts: Record<string, string>) => void }).run({
          websiteToken: "YOUR_CHATWOOT_TOKEN",
          baseUrl: CHATWOOT_URL,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
