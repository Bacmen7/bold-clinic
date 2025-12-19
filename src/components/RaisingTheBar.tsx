"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const listItems = [
  "Doctor-approved treatment pathways",
  "Evidence-based technology selection",
  "Patient-first consultation framework",
];

export default function RaisingTheBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FFF9EC]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 py-16 lg:py-20">

          {/* LEFT SIDE: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden">
              <Image
                src="/image.png"
                alt="Raising The Bar"
                fill
                className="object-cover object-top"
              />
              {/* Play Button */}
              <button className="absolute bottom-6 right-6 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg group">
                <Play size={20} className="text-black ml-0.5 group-hover:scale-110 transition-transform" fill="black" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:pl-8">
            <div className="max-w-lg">

              {/* Title */}
              <h2 className={`font-inferi text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-black mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Raising the Bar in Aesthetic Dermatology
              </h2>

              {/* Divider */}
              <div className="border-t border-[#D4D0C8] mb-6"></div>

              {/* Description */}
              <p className={`font-basis text-base text-gray-600 leading-relaxed mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Bold Clinics was built to fix what&apos;s broken in aesthetic care. No more inconsistent outcomes, over-commercialisation, and lack of medical accountability.
              </p>

              {/* Divider */}
              <div className="border-t border-[#D4D0C8] mb-6"></div>

              {/* Subtitle */}
              <p className={`font-basis text-base text-black font-medium mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Every Bold clinic follows the same:
              </p>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-3 mb-8">
                {listItems.map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${300 + idx * 100}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                    <span className="text-lg font-inferi text-black tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-[#D4D0C8] mb-6"></div>

              {/* Bottom Text */}
              <p className="font-basis text-base text-gray-600 leading-relaxed mb-10">
                So whether you walk into Bold in one city or another, the experience and results stay consistent.
              </p>

              {/* Divider */}
              <div className="border-t border-[#D4D0C8] mb-8"></div>

              {/* Link */}
              <Link
                href="/philosophy"
                className="inline-block font-basis text-black underline underline-offset-4 decoration-black hover:decoration-[#F6544A] hover:text-[#F6544A] transition-colors text-[15px] uppercase tracking-wide font-medium"
              >
                Discover Our Philosophy
              </Link>

            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
