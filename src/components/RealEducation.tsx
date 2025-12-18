import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const educationItems = [
  {
    title: "Skin & Hair Care Guides",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=400&fit=crop"
  },
  {
    title: "Treatment Explainers",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop"
  },
  {
    title: "Post-Procedure Care Tips",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
  }
];

export default function RealEducation() {
  return (
    <section className="w-full bg-[#FCF4E9] py-24 border-b border-[#ECDCCD] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* TOP: Centered Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Empowering You
          </span>
          <h2 className="font-inferi text-[42px] leading-[50px] font-normal text-black mb-6">
            Not Just Treatments.<br />Real Education.
          </h2>
          <p className="font-basis text-gray-700 text-lg font-light leading-relaxed mb-10">
            We believe informed patients make better decisions. Explore our resources to understand your skin better.
          </p>
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center px-8 py-4 bg-[#F6544A] text-white rounded-full font-basis text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Explore the Knowledge Hub
          </Link>
        </div>

        {/* BOTTOM: Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#F6544A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center justify-between">
                <h3
                  style={{ fontSize: '30px', lineHeight: '36px' }}
                  className="font-inferi text-black group-hover:text-[#F6544A] transition-colors flex-1"
                >
                  {item.title}
                </h3>
                <ArrowRight
                  size={24}
                  className="text-gray-400 group-hover:text-[#F6544A] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
