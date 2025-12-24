"use client";

import Image from "next/image";
import Footer from "@/components/Footer";

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-[#ECDCCD] flex flex-col lg:flex-row border-b border-[#FCF4E9]">
        {/* LEFT SIDE: Main Image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] relative overflow-hidden order-1 lg:order-1">
          <Image
            src="/hero.png"
            alt="Treatments"
            fill
            className="object-cover object-center animate-fade-in"
            priority
          />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-16 bg-[#ECDCCD] relative order-2 lg:order-2">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="headline-style font-inferi mb-6 tracking-tight animate-slide-up">
              Our Treatments <br />
              <span className="text-black">Dermatology-led aesthetic treatments.</span>
            </h1>

            <p className="description-style font-basis mb-4 text-gray-800 animate-slide-up animation-delay-200">
              Designed for real skin, real concerns, and real results.
            </p>

            <p className="font-basis text-gray-700 mb-4 text-sm lg:text-base animate-slide-up animation-delay-300">
              At our clinics, every aesthetic treatment begins with a medical consultation, not a trend, package, or machine recommendation.
            </p>

            <p className="font-basis text-gray-700 mb-8 text-sm lg:text-base animate-slide-up animation-delay-400">
              Our dermatologists focus on diagnosis first, followed by customised, evidence-based treatment plans that prioritise safety, long-term skin health, and natural outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* How We Approach Section */}
      <section className="w-full bg-[#FFF9EC] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-inferi text-[32px] lg:text-[42px] text-[#18454B] mb-10">
                How We Approach Aesthetic Treatments
              </h2>

              <div className="grid grid-cols-1 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F6544A] rounded-full flex-shrink-0"></div>
                  <span className="font-basis text-gray-800 text-base lg:text-lg">Dermatologist-led care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F6544A] rounded-full flex-shrink-0"></div>
                  <span className="font-basis text-gray-800 text-base lg:text-lg">Personalised treatment planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F6544A] rounded-full flex-shrink-0"></div>
                  <span className="font-basis text-gray-800 text-base lg:text-lg">Clinically proven technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F6544A] rounded-full flex-shrink-0"></div>
                  <span className="font-basis text-gray-800 text-base lg:text-lg">Results that improve over time — not overnight gimmicks</span>
                </div>
              </div>

              <p className="font-basis text-gray-700 text-base lg:text-lg">
                We don't believe in one-size-fits-all solutions. Your skin, hair, and ageing patterns are unique, and so is your treatment plan.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Aesthetic Treatments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Treatments Section */}
      <section className="w-full bg-[#ECDCCD] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <span className="font-basis text-[#F6544A] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Treatments by Concern
            </span>
            <h2 className="font-inferi text-[32px] lg:text-[42px] text-[#18454B] mb-4">
              Skin Treatments
            </h2>
            <p className="font-basis text-gray-700 text-sm lg:text-base max-w-3xl">
              Healthy skin starts with understanding what's happening beneath the surface. Our dermatologists treat both visible concerns and their root causes.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-4">
            {/* Acne & Acne Scars Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Acne & Acne Scars Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Acne & Acne Scars</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    Persistent acne and scarring often require more than creams.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Medical acne protocols
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Chemical peels
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Microneedling, RF microneedling, Laser resurfacing
                  </li>
                </ul>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <p className="my-3 px-4 font-basis text-gray-600 text-xs italic sm:my-4 sm:px-5 md:px-6">
                  Treatment choice depends on acne type, scar depth, and skin sensitivity.
                </p>
              </div>
            </div>

            {/* Pigmentation & Uneven Skin Tone Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Pigmentation Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Pigmentation & Uneven Skin Tone</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    Melasma, tanning, and post-acne marks need careful, staged treatment.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Laser toning
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Chemical peels
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Medical depigmenting regimens, Skin barrier repair programs
                  </li>
                </ul>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <p className="my-3 px-4 font-basis text-gray-600 text-xs italic sm:my-4 sm:px-5 md:px-6">
                  Over-treatment can worsen pigmentation — dermatological supervision is key.
                </p>
              </div>
            </div>

            {/* Dull Skin, Texture & Open Pores Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Dull Skin Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Dull Skin, Texture & Open Pores</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    For skin that looks tired, rough, or uneven.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Medical facials
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Microneedling
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Skin boosters, Laser rejuvenation
                  </li>
                </ul>
              </div>
            </div>

            {/* Dark Circles Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Dark Circles Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Dark Circles</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    Dark circles can be due to pigmentation, volume loss, or vascular issues.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Under-eye peels
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Skin boosters
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Fillers (when appropriate), Energy-based tightening
                  </li>
                </ul>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <p className="my-3 px-4 font-basis text-gray-600 text-xs italic sm:my-4 sm:px-5 md:px-6">
                  A detailed assessment determines the correct approach.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hair & Scalp Treatments Section */}
      <section className="w-full bg-[#FFF9EC] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            <h2 className="mb-4 font-inferi text-[32px] lg:text-[42px] text-[#18454B] sm:col-span-2 md:mb-0 lg:col-span-1">
              Hair & Scalp Treatments
            </h2>
            <div>
              <p className="font-basis text-gray-700 text-sm lg:text-base">
                Hair loss is medical — not cosmetic. Diagnosis comes before procedures.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
            {/* Hair Fall & Thinning Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Hair Fall & Thinning Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Hair Fall & Thinning</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    For male and female pattern hair loss, stress-related hair fall, and hormonal causes.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Medical hair regimens
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    PRP (Platelet-Rich Plasma)
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    GFC / growth factor therapy
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Low-level laser therapy
                  </li>
                </ul>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <p className="my-3 px-4 font-basis text-gray-600 text-xs italic sm:my-4 sm:px-5 md:px-6">
                  Not everyone needs PRP. Many patients respond well to medical management.
                </p>
              </div>
            </div>

            {/* Hair Transplant Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Hair Transplant Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Hair Transplant (If Advised)</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    Recommended only when hair loss is stable and suitable.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Natural hairline planning
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Modern graft-preservation techniques
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Long-term maintenance guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Ageing & Facial Rejuvenation Section */}
      <section className="w-full bg-[#ECDCCD] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            <h2 className="mb-4 font-inferi text-[32px] lg:text-[42px] text-[#18454B] sm:col-span-2 md:mb-0 lg:col-span-1">
              Anti-Ageing & Facial Rejuvenation
            </h2>
            <div>
              <p className="font-basis text-gray-700 text-sm lg:text-base">
                Ageing is gradual — and so should be its treatment.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
            {/* Fine Lines & Wrinkles Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Fine Lines & Wrinkles Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Fine Lines & Wrinkles</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    To soften expression lines while preserving natural movement.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Wrinkle relaxers (Botox)
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Skin quality improvement therapies
                  </li>
                </ul>
              </div>
            </div>

            {/* Volume Loss & Sagging Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Volume Loss & Sagging Treatment"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Volume Loss & Sagging</h3>
                  <p className="text-gray-600 font-basis text-sm mt-2">
                    For cheeks, jawline, under-eyes, and facial contours.
                  </p>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Dermal fillers
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Skin boosters
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Thread lifts
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Energy-based skin tightening (HIFU / RF)
                  </li>
                </ul>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <p className="my-3 px-4 font-basis text-gray-600 text-xs italic sm:my-4 sm:px-5 md:px-6">
                  The goal is balance — not overfilling.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Laser & Advanced Technology Treatments Section */}
      <section className="w-full bg-[#FFF9EC] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            <h2 className="mb-4 font-inferi text-[32px] lg:text-[42px] text-[#18454B] sm:col-span-2 md:mb-0 lg:col-span-1">
              Laser & Advanced Technology Treatments
            </h2>
            <div>
              <p className="font-basis text-gray-700 text-sm lg:text-base">
                Technology is powerful when used correctly — and risky when misused.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
            {/* Laser Hair Reduction Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Laser Hair Reduction"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Laser Hair Reduction</h3>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Suitable for face & body
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Progressive hair reduction over multiple sessions
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Safe protocols for Indian skin tones
                  </li>
                </ul>
              </div>
            </div>

            {/* Laser for Pigmentation & Texture Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Laser for Pigmentation & Texture"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Laser for Pigmentation & Texture</h3>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Tanning & sun damage
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Post-acne marks
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Skin resurfacing
                  </li>
                </ul>
              </div>
            </div>

            {/* Tattoo Removal Card */}
            <div className="rounded-lg border border-[#18454B]/10 bg-white">
              <div className="relative p-1">
                <Image
                  src="/hero.png"
                  alt="Tattoo Removal"
                  width={600}
                  height={400}
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-inferi text-xl text-[#18454B]">Tattoo Removal</h3>
                </div>
                <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                <ul className="text-gray-600 font-basis text-sm">
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Multi-session approach
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Colour-specific laser selection
                  </li>
                  <div className="h-px border-t border-dashed border-[#18454B]/20"></div>
                  <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                    <div className="mt-1 w-1.5 h-1.5 shrink-0 bg-[#F6544A] rounded-full"></div>
                    Minimal scarring protocols
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Aesthetic Treatments Section */}
      <section className="w-full bg-[#ECDCCD] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Body Aesthetic Treatments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-inferi text-[32px] lg:text-[42px] text-[#18454B] mb-4">
                Body Aesthetic Treatments
              </h2>
              <p className="font-basis text-gray-700 text-base lg:text-lg mb-8">
                For patients seeking non-surgical body contouring.
              </p>

              {/* Divider */}
              <div className="border-t border-[#D4C4B5] mb-8"></div>

              {/* Body Contouring Content */}
              <div className="mb-8">
                <h3 className="font-inferi text-2xl lg:text-3xl text-black mb-6">
                  Body Contouring
                </h3>

                <p className="font-basis text-base text-gray-600 leading-relaxed mb-6">
                  Non-surgical solutions for body shaping and skin improvement:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                    <span className="font-basis text-base text-gray-700">Fat reduction technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                    <span className="font-basis text-base text-gray-700">Skin tightening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                    <span className="font-basis text-base text-gray-700">Stretch mark reduction</span>
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-[#D4C4B5] mb-6"></div>

              <p className="font-basis text-sm text-gray-600 italic">
                Results vary and are best when combined with lifestyle guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Comes First Section */}
      <section className="w-full bg-[#FFF9EC] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="font-inferi text-2xl md:text-3xl lg:text-4xl text-[#18454B]">
              Safety Comes First
            </h2>
          </div>
          <div className="flex flex-col gap-x-8 gap-y-3 xl:flex-row">
            <div className="flex flex-1 flex-col rounded-lg bg-[#ECDCCD] p-6 lg:py-8">
              <div className="grid flex-1 grid-cols-1">
                <p className="font-basis text-sm text-gray-700 lg:text-base">
                  All treatments are performed by qualified doctors
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-[#ECDCCD] p-6 lg:py-8">
              <div className="grid flex-1 grid-cols-1">
                <p className="font-basis text-sm text-gray-700 lg:text-base">
                  Only approved technologies and products are used
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-[#ECDCCD] p-6 lg:py-8">
              <div className="grid flex-1 grid-cols-1">
                <p className="font-basis text-sm text-gray-700 lg:text-base">
                  Clear guidance on downtime, risks, and aftercare
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-[#ECDCCD] p-6 lg:py-8">
              <div className="grid flex-1 grid-cols-1">
                <p className="font-basis text-sm text-gray-700 lg:text-base">
                  Ethical recommendations — even if that means saying no
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During Your Consultation Section */}
      <section className="w-full bg-[#ECDCCD] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <h2 className="font-inferi text-[32px] lg:text-[42px] text-[#18454B] mb-4">
              What to Expect During Your Consultation
            </h2>
          </div>

          {/* Content List */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <ul className="space-y-6 max-w-3xl">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                <p className="font-basis text-gray-700 text-base lg:text-lg">
                  Medical evaluation of skin or hair concern
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                <p className="font-basis text-gray-700 text-base lg:text-lg">
                  Clear explanation of treatment options
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                <p className="font-basis text-gray-700 text-base lg:text-lg">
                  Realistic expectations on results & timelines
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-2 h-2 shrink-0 bg-[#F6544A] rounded-full"></div>
                <p className="font-basis text-gray-700 text-base lg:text-lg">
                  Customised plan — no forced packages
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <section className="w-full bg-[#FFF9EC] py-16 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-inferi text-[32px] lg:text-[42px] text-[#18454B] mb-4">
            Ready to Begin?
          </h2>
          <p className="font-basis text-gray-700 text-base lg:text-lg max-w-2xl mx-auto mb-12">
            Whether you're exploring treatments or unsure where to start, a consultation is the first step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/appointment"
              className="bg-[#18454B] hover:bg-[#18454B]/90 text-white px-8 py-4 rounded-md text-base lg:text-lg font-semibold transition-colors w-full sm:w-auto"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-[#18454B] border-2 border-[#18454B] px-8 py-4 rounded-md text-base lg:text-lg font-semibold transition-colors w-full sm:w-auto"
            >
              Speak to Our Care Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
