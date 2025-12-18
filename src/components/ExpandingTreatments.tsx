"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 0,
    title: "Skin",
    subtitle: "Clarity & Radiance",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
    items: ["Acne & acne scar treatments", "Pigmentation & melasma care", "Anti-aging & rejuvenation", "Chemical peels & medical facials"]
  },
  {
    id: 1,
    title: "Hair",
    subtitle: "Volume & Health",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
    items: ["Hair fall & alopecia management", "PRP / GFC therapies", "Scalp health programs"]
  },
  {
    id: 2,
    title: "Laser",
    subtitle: "Precision & Lasting",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    items: ["Laser hair reduction", "Laser pigmentation treatments", "Acne scar & resurfacing lasers"]
  },
  {
    id: 3,
    title: "Injectables",
    subtitle: "Enhance & Restore",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    items: ["Botox & wrinkle relaxers", "Dermal fillers (face, lips, jawline)", "Preventive & corrective anti-aging"]
  }
];

export default function ExpandingTreatments() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full bg-[#FCF4E9] py-20 lg:py-24 overflow-hidden border-b border-[#ECDCCD] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-basis text-[#F6544A] text-base lg:text-lg font-semibold tracking-widest uppercase mb-3 block">
            Our Expertise
          </span>
          <h2 className="font-inferi text-[42px] leading-[50px] font-normal text-black">
            Curated Treatments
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row h-[700px] lg:h-[600px] gap-4">
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`
                  relative rounded-none overflow-hidden cursor-pointer
                  transition-all duration-700 ease-in-out group
                  ${isActive ? 'flex-[4] lg:flex-[3]' : 'flex-[1] lg:flex-[0.8]'}
                `}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className={`
                    object-cover transition-transform duration-1000 ease-out
                    ${isActive ? 'scale-100' : 'scale-110 group-hover:scale-105'}
                  `}
                />
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent
                  transition-opacity duration-500
                  ${isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-80'}
                `} />

                <div className={`
                  absolute inset-0 p-6 lg:p-10 flex flex-col
                  ${isActive ? 'justify-end' : 'justify-end lg:justify-center lg:items-center'}
                `}>
                  <div className={`
                    flex items-center justify-between mb-2 w-full
                    transition-all duration-500
                    ${!isActive ? 'lg:flex-col-reverse lg:h-[200px] lg:gap-8' : ''}
                  `}>
                    <div>
                      <p className={`
                        font-basis text-[#F6544A] text-xs lg:text-sm font-semibold tracking-wider uppercase mb-1
                        transition-all duration-500 delay-100
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}
                      `}>
                        {cat.subtitle}
                      </p>
                      <h3 className={`
                        font-inferi text-white
                        transition-all duration-500 whitespace-nowrap
                        ${!isActive ? 'lg:-rotate-90 lg:origin-center lg:mb-10 opacity-80' : ''}
                      `}
                      style={{ fontSize: isActive ? '56px' : '40px' }}>
                        {cat.title}
                      </h3>
                    </div>

                    <div className={`
                      w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30
                      flex items-center justify-center text-white backdrop-blur-md
                      transition-all duration-500
                      ${isActive ? 'bg-[#F6544A] border-[#F6544A] text-white' : 'bg-white/10 group-hover:bg-white/20 lg:rotate-0'}
                    `}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  <div className={`
                    overflow-hidden transition-all duration-700 ease-in-out
                    ${isActive ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="w-16 h-0.5 bg-[#F6544A] mb-6 opacity-80"></div>
                    <ul className="flex flex-col gap-3 mb-8">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-200 font-basis text-sm lg:text-[17px] hover:text-white transition-colors duration-200">
                          <ChevronRight size={16} className="text-[#F6544A] mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-basis text-sm font-semibold hover:bg-[#F6544A] hover:text-white transition-all group/btn">
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
