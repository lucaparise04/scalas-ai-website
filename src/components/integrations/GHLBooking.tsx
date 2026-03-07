"use client";

import { BOOKING_URL } from "@/lib/constants";

interface GHLBookingProps {
  className?: string;
}

export default function GHLBooking({ className = "" }: GHLBookingProps) {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={BOOKING_URL}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        className="min-h-[600px] rounded-xl"
        title="Book a call"
      />
    </div>
  );
}
