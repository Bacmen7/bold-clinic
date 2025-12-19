"use client";

import { Shield, Target, Cpu, MessageCircle, Heart } from "lucide-react";

const items = [
  {
    id: 1,
    icon: Shield,
    title: "Doctor-First, Not Sales-First",
    description: "Every treatment plan is created or supervised by qualified dermatologists. No pushy sales tactics, just honest medical advice.",
  },
  {
    id: 2,
    icon: Target,
    title: "Standardised Outcomes Across Clinics",
    description: "No experimentation. No random devices. Only protocols tested across the network for consistent results.",
  },
  {
    id: 3,
    icon: Cpu,
    title: "Technology That's Clinically Proven",
    description: "We invest in globally recognised, FDA-approved platforms — not trends or untested equipment.",
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Honest Consultations",
    description: "If a treatment isn't right for you, we'll say so. Your health comes before our business.",
  },
  {
    id: 5,
    icon: Heart,
    title: "Built for Long-Term Skin Health",
    description: "Not quick fixes. Sustainable, medically guided care that focuses on lasting results.",
  }
];

export default function WhyChooseBold() {
  return (
    <section className="w-full bg-[#ECDCCD] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#D4C4B5]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Philosophy
          </span>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2 className="font-inferi text-[36px] lg:text-[48px] leading-[1.1] font-normal text-black lg:max-w-[50%]">
              Why Choose Bold Clinics?
            </h2>
            <p className="font-basis text-gray-600 text-base lg:text-lg font-light leading-relaxed lg:max-w-md lg:pt-2">
              We are redefining aesthetic care with transparency, expertise, and a commitment to real results.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* First item - Featured large */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-[#F6544A] rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[300px] lg:min-h-full group hover:bg-[#e04940] transition-colors duration-300">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-inferi text-[28px] lg:text-[32px] leading-tight text-white mb-4">
                {items[0].title}
              </h3>
              <p className="font-basis text-white/80 text-base leading-relaxed">
                {items[0].description}
              </p>
            </div>
            <div className="mt-8">
              <span className="font-inferi text-[80px] lg:text-[100px] leading-none text-white/10">01</span>
            </div>
          </div>

          {/* Other items */}
          {items.slice(1).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 group transition-all duration-300 flex flex-col justify-between min-h-[200px] border border-white/50"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FCF4E9] flex items-center justify-center group-hover:bg-[#F6544A]/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#F6544A]" />
                    </div>
                    <span className="font-inferi text-[40px] leading-none text-gray-300 group-hover:text-[#F6544A]/30 transition-colors duration-300">
                      {String(item.id).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-inferi text-[22px] lg:text-[24px] leading-tight text-black mb-3 group-hover:text-[#F6544A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-basis text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
