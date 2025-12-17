"use client";

export default function ConsultationForm() {
  return (
    <section className="w-full bg-[#282725] py-24 lg:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">

          <span className="font-basis text-[#F6544A] text-xs font-bold tracking-widest uppercase mb-6 block">
            Start Your Journey
          </span>

          <h2 className="font-inferi text-3xl lg:text-5xl text-white mb-6 leading-tight max-w-2xl">
            Your Aesthetic Journey Starts with a Medical Consultation
          </h2>

          <p className="font-basis text-white/70 text-lg mb-12 leading-relaxed max-w-2xl">
            No pressure. No upselling. Just an expert from our team, contacting you within 24 hours to help you with your journey.
          </p>

          <form className="w-full max-w-md space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-600 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#F6544A] transition-colors font-basis text-lg"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-600 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#F6544A] transition-colors font-basis text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full bg-transparent border-b border-gray-600 py-4 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#F6544A] transition-colors font-basis text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-10 bg-[#F6544A] text-white py-4 rounded-full font-basis font-semibold uppercase tracking-wider hover:bg-white hover:text-[#282725] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get A Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
