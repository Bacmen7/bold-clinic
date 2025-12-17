"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#BFCEDE] py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <p className="text-[#18454B] text-[16px] italic">
          Trusted dermatology care for all your skin, hair & nail concerns at Bold Clinic...
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#18454B] hover:text-[#dc2626] transition-colors"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
