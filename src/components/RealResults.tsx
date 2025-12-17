import Image from "next/image";
import Link from "next/link";

const tags = ["Skin", "Hair", "Laser", "Injectables"];

export default function RealResults() {
  return (
    <section className="w-full bg-[#ECDCCD] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#FCF4E9]">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Label */}
        <div className="mb-12">
          <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase">
            Our Commitment
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* LEFT: Before/After Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            {/* Before Image */}
            <div className="flex-1 relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop"
                  alt="Before Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-4 left-4 font-basis text-xs font-bold tracking-widest uppercase text-white bg-black/50 px-3 py-1.5">
                Before
              </span>
            </div>

            {/* After Image */}
            <div className="flex-1 relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop"
                  alt="After Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-4 left-4 font-basis text-xs font-bold tracking-widest uppercase text-white bg-black/50 px-3 py-1.5">
                After
              </span>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-inferi text-[32px] lg:text-[42px] leading-[1.15] text-black mb-4">
              Real Results.<br />Real Confidence.
            </h2>

            <p className="font-basis text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              Before–after galleries, patient stories, and outcome-based visuals — always ethical, always honest.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-basis text-sm text-black border border-black/30 px-4 py-2 rounded-none bg-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/results"
              className="inline-flex items-center px-8 py-4 bg-[#F6544A] text-white rounded-full font-basis text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              View Results
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
