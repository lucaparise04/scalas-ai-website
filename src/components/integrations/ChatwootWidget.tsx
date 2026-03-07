"use client";

import { useEffect } from "react";
import { CHATWOOT_URL } from "@/lib/constants";

export default function ChatwootWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${CHATWOOT_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.chatwootSettings = {
        type: "standard",
        launcherTitle: "Chat with us",
      };
      if (typeof w.chatwootSDK === "object" && w.chatwootSDK !== null) {
        w.chatwootSDK.run({
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
