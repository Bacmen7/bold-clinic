"use client";

export default function ConsultationForm() {
  return (
    <section className="w-full bg-[#282725] py-16 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase mb-3 block text-center">
            Start Your Journey
          </span>
          <h2 className="font-inferi text-white text-3xl lg:text-4xl font-normal mb-4 text-center">
            Your Aesthetic Journey Starts with a Medical Consultation
          </h2>
          <p className="font-basis text-white/70 text-base text-center">
            Our expert team will reach out within 24 hours to guide your journey.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-transparent border border-white/30 py-3 px-4 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors font-basis text-sm rounded"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile Number*"
              className="w-full bg-transparent border border-white/30 py-3 px-4 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors font-basis text-sm rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F6544A] text-white py-3 rounded font-basis font-semibold text-sm hover:bg-[#e04940] transition-all"
          >
            Get a Call Back
          </button>

          <div className="pt-4 flex items-center justify-center gap-4 border-t border-white/20">
            <p className="font-basis text-white/80 text-sm">
              Speak to our Patient Counsellor
            </p>
            <a
              href="tel:9833943177"
              className="font-basis text-white text-lg font-semibold hover:text-[#F6544A] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98339-43177
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
