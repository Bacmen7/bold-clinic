"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rahul Rahul",
    qualification: "MD, Dermatology",
    specialty: "Aesthetic Medicine & Lasers",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop"
  },
  {
    name: "Dr. Vikram Vikram",
    qualification: "MBBS, DVD",
    specialty: "Clinical Dermatology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop"
  },
  {
    name: "Dr. Shika Shika",
    qualification: "MD, Cosmetology",
    specialty: "Injectables & Facial Aesthetics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=600&fit=crop"
  },
  {
    name: "Dr. Meena Meena",
    qualification: "MD, Dermatology",
    specialty: "Hair Restoration Expert",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=600&fit=crop"
  }
];

export default function BackedByDermatologists() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-[#ECDCCD] py-24 border-b border-[#D4C4B5] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between lg:h-[420px]">
            <div>
              <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase mb-3 block">
                Medical Excellence
              </span>
              <h2 className="font-inferi text-[42px] leading-[50px] font-normal text-black mb-6">
                Backed by Experienced Dermatologists
              </h2>
              <p className="font-basis text-gray-700 text-lg font-light leading-relaxed">
                Our clinics are led by dermatologists who specialise in aesthetic medicine — supported by continuous training, peer reviews, and shared best practices across the Bold network.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex gap-4 mt-12">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Doctor Profile Grid/Carousel */}
          <div className="w-full lg:w-2/3">
            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
              <div className="flex gap-4 pb-4">
                {doctors.map((doc, index) => (
                  <div key={index} className="group cursor-pointer flex-shrink-0 w-[200px] bg-[#FCF4E9] rounded-lg overflow-hidden">
                    {/* Doctor Image */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Doctor Details Card */}
                    <div className="bg-[#FCF4E9] p-3 flex flex-col">
                      <h3 className="font-inferi text-base text-black mb-1 leading-tight group-hover:text-[#F6544A] transition-colors">
                        {doc.name}
                      </h3>
                      <span className="font-basis text-[10px] font-bold tracking-widest text-gray-600 uppercase block mb-1">
                        {doc.qualification}
                      </span>
                      <p className="font-basis text-sm text-gray-700 leading-tight">
                        {doc.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Carousel */}
            <div
              ref={scrollRef}
              className="hidden md:flex overflow-x-auto scrollbar-hide gap-5 pb-4"
            >
              {doctors.map((doc, index) => (
                <div key={index} className="group cursor-pointer bg-[#FCF4E9] rounded-lg overflow-hidden flex-shrink-0 w-[200px]">
                  {/* Doctor Image */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Doctor Details Card */}
                  <div className="bg-[#FCF4E9] p-3 flex flex-col">
                    <h3 className="font-inferi text-base text-black mb-1 leading-tight group-hover:text-[#F6544A] transition-colors">
                      {doc.name}
                    </h3>
                    <span className="font-basis text-[10px] font-bold tracking-widest text-gray-600 uppercase block mb-1">
                      {doc.qualification}
                    </span>
                    <p className="font-basis text-sm text-gray-700 leading-tight">
                      {doc.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
