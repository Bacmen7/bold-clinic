"use client";

import { useState } from "react";
import Link from "next/link";

const womenTreatments = [
  { name: "Laser Hair Removal", icon: "laser" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
  { name: "Facial Fillers", icon: "filler" },
  { name: "Skin Rejuvenation", icon: "rejuvenation" },
  { name: "Pigmentation Treatments", icon: "pigmentation" },
  { name: "Acne & Acne Scars", icon: "acne" },
  { name: "Body Contouring", icon: "contouring" },
  { name: "Stretch Mark Treatments", icon: "stretchmark" },
  { name: "Dark Circle Treatments", icon: "darkcircle" },
];

const menTreatments = [
  { name: "Laser Hair Removal", icon: "laser" },
  { name: "Wrinkle Relaxers", icon: "wrinkle" },
  { name: "Facial Fillers", icon: "filler" },
  { name: "Hair Loss Treatments", icon: "hairloss" },
  { name: "Skin Brightening", icon: "brightening" },
  { name: "Acne & Scarring", icon: "acne" },
  { name: "Body Contouring", icon: "contouring" },
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

const RejuvenationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M24 16V24L28 28" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PigmentationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="14" stroke="#8B7B6B" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="#8B7B6B"/>
    <circle cx="28" cy="22" r="2" fill="#8B7B6B"/>
    <circle cx="24" cy="28" r="2" fill="#8B7B6B"/>
  </svg>
);

const AcneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12C16 12 12 16 12 24C12 32 16 36 24 36C32 36 36 32 36 24C36 16 32 12 24 12Z" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M18 22L22 26M26 22L30 26" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ContouringIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18C16 18 18 14 24 14C30 14 32 18 32 18M16 30C16 30 18 34 24 34C30 34 32 30 32 30" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 24C20 24 22 22 24 22C26 22 28 24 28 24" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StretchMarkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 18H28M16 24H30M14 30H28" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 18L18 30M24 18L24 30M28 18L26 30" stroke="#8B7B6B" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const DarkCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="24" r="6" stroke="#8B7B6B" strokeWidth="2"/>
    <circle cx="28" cy="24" r="6" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M18 28C18 28 20 30 24 30C28 30 30 28 30 28" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const HairLossIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 14C18 14 14 18 14 24V32H34V24C34 18 30 14 24 14Z" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M20 10L24 14L28 10" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrighteningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="8" stroke="#8B7B6B" strokeWidth="2"/>
    <path d="M24 10V14M24 34V38M38 24H34M14 24H10M33 33L30 30M18 18L15 15M33 15L30 18M18 30L15 33" stroke="#8B7B6B" strokeWidth="2" strokeLinecap="round"/>
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
    case "rejuvenation":
      return <RejuvenationIcon />;
    case "pigmentation":
      return <PigmentationIcon />;
    case "acne":
      return <AcneIcon />;
    case "contouring":
      return <ContouringIcon />;
    case "stretchmark":
      return <StretchMarkIcon />;
    case "darkcircle":
      return <DarkCircleIcon />;
    case "hairloss":
      return <HairLossIcon />;
    case "brightening":
      return <BrighteningIcon />;
    default:
      return <LaserIcon />;
  }
};

export default function TreatmentSelector() {
  const [activeTab, setActiveTab] = useState<"women" | "men">("women");
  const [selectedTreatments, setSelectedTreatments] = useState<number[]>([0, 1]); // Default selections

  const toggleTreatment = (index: number) => {
    if (selectedTreatments.includes(index)) {
      setSelectedTreatments(selectedTreatments.filter(i => i !== index));
    } else {
      setSelectedTreatments([...selectedTreatments, index]);
    }
  };

  const handleTabChange = (tab: "women" | "men") => {
    setActiveTab(tab);
    setSelectedTreatments([0, 1]); // Reset selections when switching tabs
  };

  const currentTreatments = activeTab === "women" ? womenTreatments : menTreatments;

  return (
    <section className="w-full bg-[#F5EDE3] py-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#ECDCCD]">
      <div className="max-w-[1800px] mx-auto">

        {/* Title */}
        <h2 className="font-inferi text-[36px] lg:text-[42px] text-center text-[#8B7B6B] mb-4 italic">
          Explore Aesthetic Treatments
        </h2>
        <p className="font-basis text-center text-[#8B7B6B] text-lg mb-12">
          Choose a treatment to learn more or find clinics that offer it.
        </p>

        {/* Gender Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange("women")}
            className={`px-8 py-3 rounded-lg font-basis font-semibold text-base transition-all ${
              activeTab === "women"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Women
          </button>
          <button
            onClick={() => handleTabChange("men")}
            className={`px-8 py-3 rounded-lg font-basis font-semibold text-base transition-all ${
              activeTab === "men"
                ? "bg-black text-white"
                : "bg-white text-black border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Men
          </button>
        </div>

        {/* Treatment Grid */}
        <div className="flex flex-col gap-3 mb-12">
          {/* First Row - 5 cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {currentTreatments.slice(0, 5).map((treatment, index) => (
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
                <p className="font-inferi text-[10px] text-black text-center leading-tight whitespace-nowrap">
                  {treatment.name}
                </p>
              </button>
            ))}
          </div>

          {/* Second Row - Women: offset layout, Men: centered */}
          {currentTreatments.length > 5 && (
            <div className={activeTab === "men" ? "flex justify-center" : ""}>
              <div className={`gap-3 ${
                activeTab === "women"
                  ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:ml-[calc((100%/5)/2)] md:mr-[calc((100%/5)/2)] lg:ml-[calc((100%/5)/2)] lg:mr-[calc((100%/5)/2)]"
                  : "grid grid-cols-2 max-w-fit"
              }`}>
                {currentTreatments.slice(5).map((treatment, index) => {
                  const actualIndex = index + 5;
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
                      <p className="font-inferi text-[10px] text-black text-center leading-tight whitespace-nowrap">
                        {treatment.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
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
