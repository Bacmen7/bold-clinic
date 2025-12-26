"use client";

import { useState } from "react";
import Link from "next/link";

const treatmentsRow1 = [
  { name: "Laser Hair Removal", icon: "laser" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
  { name: "Facial Fillers", icon: "filler" },
  { name: "CoolSculpting ®", icon: "coolsculpting" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
  { name: "Facial Fillers", icon: "filler" },
  { name: "CoolSculpting ®", icon: "coolsculpting" },
];

const treatmentsRow2 = [
  { name: "Laser Hair Removal", icon: "laser" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
  { name: "Facial Fillers", icon: "filler" },
  { name: "CoolSculpting ®", icon: "coolsculpting" },
  { name: "Laser Hair Removal", icon: "laser" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
];

// Icon SVG Components
const LaserIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12L24 8L28 12M24 8V28M16 20L12 24L16 28M32 20L36 24L32 28M20 36L24 40L28 36" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WrinkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M18 20C18 20 20 18 24 18C28 18 30 20 30 20M18 28C18 28 20 30 24 30C28 30 30 28 30 28" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FillerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 14L28 14M24 10V18M16 24C16 24 18 20 24 20C30 20 32 24 32 24C32 24 30 28 24 28C18 28 16 24 16 24Z" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoolSculptingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 10L28 14L24 18M24 10L20 14L24 18M12 24L16 20L20 24M36 24L32 20L28 24M24 30L20 34L24 38M24 30L28 34L24 38" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "laser":
      return <LaserIcon />;
    case "wrinkle":
      return <WrinkleIcon />;
    case "filler":
      return <FillerIcon />;
    case "coolsculpting":
      return <CoolSculptingIcon />;
    default:
      return <LaserIcon />;
  }
};

export default function TreatmentSelector() {
  const [activeTab, setActiveTab] = useState<"women" | "men">("women");
  const [selectedTreatments, setSelectedTreatments] = useState<number[]>([1, 5]); // Default selections

  const toggleTreatment = (index: number) => {
    if (selectedTreatments.includes(index)) {
      setSelectedTreatments(selectedTreatments.filter(i => i !== index));
    } else {
      setSelectedTreatments([...selectedTreatments, index]);
    }
  };

  return (
    <section className="w-full bg-[#F5EDE3] py-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#ECDCCD]">
      <div className="max-w-[1800px] mx-auto">

        {/* Title */}
        <h2 className="font-inferi text-[36px] lg:text-[42px] text-center text-[#8B7B6B] mb-12 italic">
          North America&apos;s #1 Aesthetics Brand
        </h2>

        {/* Gender Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("women")}
            className={`px-8 py-3 rounded-lg font-basis font-semibold text-base transition-all ${
              activeTab === "women"
                ? "bg-[#C9A66B] text-white"
                : "bg-white text-black border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Women
          </button>
          <button
            onClick={() => setActiveTab("men")}
            className={`px-8 py-3 rounded-lg font-basis font-semibold text-base transition-all ${
              activeTab === "men"
                ? "bg-[#C9A66B] text-white"
                : "bg-white text-black border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Men
          </button>
        </div>

        {/* Treatment Grid - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-6">
          {treatmentsRow1.map((treatment, index) => (
            <button
              key={index}
              onClick={() => toggleTreatment(index)}
              className={`relative px-8 py-3 rounded transition-all group flex flex-col items-center ${
                selectedTreatments.includes(index)
                  ? "bg-[#FFF9EC]"
                  : "bg-white"
              }`}
            >
              {/* Selection Indicator */}
              <div
                className={`absolute top-2 left-3 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedTreatments.includes(index)
                    ? "bg-[#C9A66B] border-[#C9A66B]"
                    : "bg-white border-gray-300 group-hover:border-[#C9A66B]"
                }`}
              >
                {selectedTreatments.includes(index) && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-1">{getIcon(treatment.icon)}</div>

              {/* Treatment Name */}
              <p className="font-inferi text-[7px] text-black text-center leading-tight whitespace-nowrap">
                {treatment.name}
              </p>
            </button>
          ))}
        </div>

        {/* Treatment Grid - Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12 md:ml-[calc((100%/7)/2-0.5rem)] md:mr-[calc((100%/7)/2-0.5rem)]">
          {treatmentsRow2.map((treatment, index) => {
            const actualIndex = index + 7;
            return (
              <button
                key={actualIndex}
                onClick={() => toggleTreatment(actualIndex)}
                className={`relative px-8 py-3 rounded transition-all group flex flex-col items-center ${
                  selectedTreatments.includes(actualIndex)
                    ? "bg-[#FFF9EC]"
                    : "bg-white"
                }`}
              >
                {/* Selection Indicator */}
                <div
                  className={`absolute top-2 left-3 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedTreatments.includes(actualIndex)
                      ? "bg-[#C9A66B] border-[#C9A66B]"
                      : "bg-white border-gray-300 group-hover:border-[#C9A66B]"
                  }`}
                >
                  {selectedTreatments.includes(actualIndex) && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-1">{getIcon(treatment.icon)}</div>

                {/* Treatment Name */}
                <p className="font-inferi text-[7px] text-black text-center leading-tight whitespace-nowrap">
                  {treatment.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F6544A] text-white rounded-full font-basis font-semibold text-base hover:bg-[#e04940] transition-all shadow-lg"
          >
            GET PRICING & PROMOS
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
