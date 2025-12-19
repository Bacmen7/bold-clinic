import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop",
    quote: "Professional laser treatment helped reduce my acne scars significantly in just 3 sessions."
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop",
    quote: "The dermatologist took time to understand my skin concerns and created a personalized treatment plan."
  },
  {
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=600&fit=crop",
    quote: "My hair restoration journey with Bold Clinics has given me confidence I never thought I'd have again."
  }
];

export default function RealResults() {
  return (
    <section className="w-full bg-[#F5EEE6] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-inferi text-[36px] lg:text-[48px] leading-tight text-black mb-6">
            Real Results. Real Confidence.
          </h2>
          <p className="font-basis text-gray-700 text-base lg:text-lg max-w-3xl mx-auto">
            Before–after galleries, patient stories, and outcome-based visuals — always ethical, always honest.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#F5E6D3] overflow-hidden group rounded-2xl">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Testimonial ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quote Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#F5E6D3]/95 p-4">
                  <p className="font-basis text-sm text-gray-800 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Results Button */}
        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center px-8 py-4 bg-[#F6544A] text-white rounded-full font-basis text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            View Results
          </Link>
        </div>

      </div>
    </section>
  );
}
