"use client";

import Image from "next/image";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Same style as Home Hero */}
      <div className="relative w-full bg-[#ECDCCD] flex flex-col lg:flex-row border-b border-[#FCF4E9]">
        {/* LEFT SIDE: Main Image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] relative overflow-hidden order-1 lg:order-1">
          <Image
            src="/hero.png"
            alt="How Bold Clinic Works"
            fill
            className="object-cover object-center animate-fade-in"
            priority
          />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-16 bg-[#ECDCCD] relative order-2 lg:order-2">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="headline-style font-inferi mb-6 tracking-tight animate-slide-up">
              How It Works
            </h1>

            <h2 className="text-2xl sm:text-3xl font-inferi font-semibold mb-6 text-black animate-slide-up animation-delay-200">
              A clear, medical-first approach to aesthetic care
            </h2>

            <p className="description-style font-basis mb-4 text-gray-800 animate-slide-up animation-delay-400">
              At Bold Clinic, we've simplified the journey to aesthetic dermatology without cutting corners.
            </p>

            <p className="description-style font-basis mb-8 text-gray-800 animate-slide-up animation-delay-600">
              Every step is designed to ensure clinical accuracy, safety, and personalised care, guided by qualified doctors.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="w-full bg-[#FFF9EC] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Step 1 - With Image */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/hero.png"
                      alt="Start with Your Concern"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">01</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Start with Your Concern
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        You don't need to know the treatment name, just your concern.
                      </p>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        Whether it's acne, pigmentation, hair fall, ageing, or skin texture issues, you begin by:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Browsing treatments by concern, or</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Booking a consultation directly</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black italic">
                        We focus on what's bothering you, not pushing procedures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - With Image (Reversed) */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Content */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">02</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Get Matched to the Right Doctor
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        Once you book:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">We connect you with a qualified dermatologist or aesthetic doctor</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Based on your concern, location, and availability</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">At a trusted Bold Clinic partner centre</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black font-medium mb-3">
                        All doctors on the platform are:
                      </p>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Clinically certified</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Experienced in aesthetic dermatology</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Aligned with ethical, evidence-based practice</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/docter.png"
                      alt="Get Matched to Doctor"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - With Image */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/docter.png"
                      alt="Medical Consultation"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">03</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Medical Consultation Comes First
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        Your consultation is where real care begins.
                      </p>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-3">
                        During the consult, the doctor will:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Evaluate your skin or hair medically</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Understand lifestyle, history, and expectations</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Explain what's actually causing the issue</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Discuss suitable treatment options, if needed</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black italic">
                        Not everyone needs a procedure. Sometimes, medical management is enough.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - With Image (Reversed) */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Content */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">04</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Personalised Treatment Plan (If Advised)
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        If a treatment is recommended, it's always:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Customised to your skin or hair type</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Outcomes, sessions, downtime explained clearly</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Planned conservatively, with safety as the priority</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black font-medium mb-3">
                        You'll know:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">What the treatment does</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">How many sessions are typically needed</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">What results to expect realistically</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black italic">
                        No forced packages. No rushed decisions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/hero.png"
                      alt="Personalised Treatment Plan"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 - With Image (Reversed) */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Content */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">05</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Treatment at a Trusted Clinic
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        Treatments are carried out:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">By trained doctors and clinical teams</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Using approved technologies and products</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Following strict safety and hygiene protocols</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black font-medium mb-3">
                        Our partner clinics are selected for:
                      </p>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Clinical standards</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Equipment quality</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Patient care experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/image.png"
                      alt="Treatment at Clinic"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 - With Image */}
          <div className="mb-12 lg:mb-16">
            <div className="border-t border-[#D4D0C8] pt-8 lg:pt-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                {/* LEFT SIDE: Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg">
                    <Image
                      src="/image.png"
                      alt="Aftercare & Ongoing Guidance"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-inferi text-[60px] lg:text-[80px] leading-none text-[#F6544A]/20">06</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-inferi text-[28px] lg:text-[36px] leading-tight text-black mb-4">
                        Aftercare & Ongoing Guidance
                      </h3>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-4">
                        Aesthetic care doesn't end when the session does.
                      </p>
                      <p className="font-basis text-base text-gray-600 leading-relaxed mb-3">
                        You receive:
                      </p>
                      <ul className="flex flex-col gap-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Clear aftercare instructions</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Guidance on maintenance or follow-ups</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F6544A] flex-shrink-0" />
                          <span className="font-basis text-base text-gray-600">Support for long-term skin or hair health</span>
                        </li>
                      </ul>
                      <p className="font-basis text-base text-black italic">
                        We believe good outcomes come from continuity, not quick fixes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Bold Clinic Different Section */}
      <section className="w-full bg-[#ECDCCD] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#D4C4B5]">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-8 lg:gap-12 xl:flex-row xl:gap-16">
          <h2 className="font-inferi text-[36px] lg:text-[48px] leading-[1.1] font-normal text-black md:shrink-0 lg:max-w-md xl:max-w-lg">
            What Makes Bold Clinic Different?
          </h2>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {/* Point 1 */}
            <div className="flex rounded-lg border border-[#D4C4B5] bg-white/60 backdrop-blur-sm p-6 md:p-8">
              <div className="mr-4 lg:mr-6 shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F6544A] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl lg:text-2xl font-basis">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-inferi text-lg lg:text-xl font-semibold text-black mb-2">
                  Diagnosis before treatment
                </h3>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex rounded-lg border border-[#D4C4B5] bg-white/60 backdrop-blur-sm p-6 md:p-8">
              <div className="mr-4 lg:mr-6 shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F6544A] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl lg:text-2xl font-basis">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-inferi text-lg lg:text-xl font-semibold text-black mb-2">
                  Evidence-based protocols
                </h3>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex rounded-lg border border-[#D4C4B5] bg-white/60 backdrop-blur-sm p-6 md:p-8">
              <div className="mr-4 lg:mr-6 shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F6544A] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl lg:text-2xl font-basis">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-inferi text-lg lg:text-xl font-semibold text-black mb-2">
                  Ethical recommendations even if that means saying no
                </h3>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex rounded-lg border border-[#D4C4B5] bg-white/60 backdrop-blur-sm p-6 md:p-8">
              <div className="mr-4 lg:mr-6 shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F6544A] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl lg:text-2xl font-basis">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-inferi text-lg lg:text-xl font-semibold text-black mb-2">
                  Care you can trust, across clinics
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Begin CTA Section */}
      <section className="w-full bg-white py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-inferi text-[36px] lg:text-[48px] leading-[1.1] font-normal text-black mb-6">
            Ready to Begin?
          </h2>
          <p className="font-basis text-lg lg:text-xl text-gray-600 leading-relaxed mb-10">
            If you're unsure where to start, a consultation is the simplest first step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/appointment"
              className="btn-primary inline-block w-full sm:w-auto"
            >
              Book an Appointment
            </a>
            <a
              href="/doctors"
              className="inline-block w-full sm:w-auto bg-transparent border-2 border-[#18454B] text-[#18454B] px-8 py-4 rounded-full font-basis font-semibold transition-all hover:bg-[#18454B] hover:text-white"
            >
              Find a Doctor Near You
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
