'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// --- Data ---
const CATEGORIES = [
  { id: "23162", label: "Laser Hair Removal" },
  { id: "23164", label: "Pimple" },
  { id: "23166", label: "Acne Scars" },
  { id: "23168", label: "Hair Loss" },
  { id: "23170", label: "Skin Lightening" },
  { id: "23172", label: "Stretch Marks" },
  { id: "23174", label: "Anti Aging" },
  { id: "44239", label: "Body Contouring" },
  { id: "55658", label: "Dark Circle" },
];

// Updated MOCK_VIDEOS with the specific video you requested
// Repeating it 3 times as requested ("tin ov video pa show kr")
const SINGLE_VIDEO = {
  title: "Indian Healthcare Insights I Dr Ajay, Narayana Health | Navig Health by Chirag Kumar",
  thumbnail: "https://img.youtube.com/vi/mGx_00Rjn9U/maxresdefault.jpg",
  id: "mGx_00Rjn9U"
};

const MOCK_VIDEOS = {
  "default": [SINGLE_VIDEO, SINGLE_VIDEO, SINGLE_VIDEO]
};

// --- Components ---

export default function TreatmentVideos() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Scroll handling
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      setTimeout(checkScroll, 100);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  // Always return the same 3 videos for this demo, regardless of tab
  const currentVideos = MOCK_VIDEOS["default"];

  return (
    <div className="font-sans text-gray-800">
      <section className="py-12 bg-[#ECDCCD] relative" id="treatment-videos">
        <div className="max-w-[1240px] mx-auto px-4">

          {/* Header */}
          <div className="text-center pb-8 mx-auto max-w-4xl">
            <h2 className="font-inferi text-[42px] leading-[50px] font-normal text-black mb-3">
              Treatment Videos
            </h2>
            <p className="font-basis text-[#8B7B6B] text-lg font-normal">
              Unlock Your Best Self With The Best Skin, Hair & Body Tips & Treatment Videos!
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block relative mb-10">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full px-12">

                <button
                  onClick={() => scroll('left')}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-500 hover:text-[#F6544A] transition-all duration-200 ${!showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                </button>

                <div
                  ref={scrollContainerRef}
                  className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`whitespace-nowrap px-6 py-2 rounded-full text-[15px] font-basis font-medium transition-colors duration-200 border
                        ${activeTab === cat.id
                          ? 'bg-[#F6544A] text-white border-[#F6544A]'
                          : 'bg-white text-[#555] border-transparent hover:bg-gray-100'
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scroll('right')}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-500 hover:text-[#F6544A] transition-all duration-200 ${!showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-8">
            <div className="relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:border-[#F6544A] focus:ring-1 focus:ring-[#F6544A] font-basis"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content Area - Fixed Grid Layout */}
          {/* Using grid-cols-1 on mobile, grid-cols-3 on md screens */}
          {/* 'items-stretch' ensures all cards in a row have the same height */}
          <div id="youtube_main" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {currentVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full cursor-pointer group">

                {/* Thumbnail Container - Strictly 16:9 Aspect Ratio */}
                <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-11 bg-[#ff0000] rounded-[20%] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg">
                       <Play size={20} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content - flex-grow ensures this section takes up remaining space */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-[16px] leading-snug font-basis font-semibold text-[#333] group-hover:text-[#F6544A] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
