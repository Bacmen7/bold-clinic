"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Doctor-First, Not Sales-First",
    description: "Every treatment plan is created or supervised by qualified dermatologists. No pushy sales tactics, just honest medical advice.",
  },
  {
    id: 2,
    title: "Standardised Outcomes Across Clinics",
    description: "No experimentation. No random devices. Only protocols tested across the network for consistent results.",
  },
  {
    id: 3,
    title: "Technology That's Clinically Proven",
    description: "We invest in globally recognised, FDA-approved platforms — not trends or untested equipment.",
  },
  {
    id: 4,
    title: "Honest Consultations",
    description: "If a treatment isn't right for you, we'll say so. Your health comes before our business.",
  },
  {
    id: 5,
    title: "Built for Long-Term Skin Health",
    description: "Not quick fixes. Sustainable, medically guided care that focuses on lasting results.",
  }
];

export default function WhyChooseBold() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#ECDCCD] py-20 lg:py-24 border-b border-[#FCF4E9] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="font-basis text-[#F6544A] text-[10px] font-semibold tracking-widest uppercase mb-3 block">
            Our Philosophy
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-inferi text-[24px] lg:text-[28px] leading-[1.15] font-normal text-black max-w-xl">
              Why Choose Bold Clinics?
            </h2>
            <p className="font-basis text-gray-700 text-xs lg:text-sm font-light leading-relaxed max-w-lg">
              We are redefining aesthetic care with transparency, expertise, and a commitment to real results.
            </p>
          </div>
        </div>

        {/* Accordion Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className={`
                  border cursor-pointer transition-all duration-300
                  ${isActive
                    ? 'bg-white border-[#F6544A] shadow-lg'
                    : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200'
                  }
                `}
              >
                <div className="p-3 lg:p-4">
                  <div className="flex items-center gap-4">
                    {/* Number/Check Icon */}
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      transition-all duration-300
                      ${isActive
                        ? 'bg-[#F6544A] text-white'
                        : 'bg-black/10 text-black'
                      }
                    `}>
                      {isActive ? (
                        <Check size={20} />
                      ) : (
                        <span className="font-basis font-semibold text-sm">{item.id}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`
                        font-inferi text-[20px] lg:text-[26px] leading-tight mb-2
                        transition-colors duration-300
                        ${isActive ? 'text-[#F6544A]' : 'text-black'}
                      `}>
                        {item.title}
                      </h3>

                      <div className={`
                        overflow-hidden transition-all duration-500
                        ${isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                      `}>
                        <p className="font-basis text-gray-600 text-[10px] lg:text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`
                      transition-transform duration-300 flex-shrink-0
                      ${isActive ? 'rotate-90' : 'rotate-0'}
                    `}>
                      <ArrowRight size={20} className={isActive ? 'text-[#F6544A]' : 'text-gray-400'} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
