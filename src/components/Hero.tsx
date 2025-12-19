"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full bg-[#ECDCCD] flex flex-col lg:flex-row border-b border-[#FCF4E9]">

      {/* LEFT SIDE: Main Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] relative overflow-hidden order-1 lg:order-1">
        <Image
          src="/hero.png"
          alt="Bold Clinic Model"
          fill
          className="object-cover object-center animate-fade-in"
          priority
        />
      </div>

      {/* RIGHT SIDE: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-16 bg-[#ECDCCD] relative order-2 lg:order-2">
        <div className="max-w-xl mx-auto lg:mx-0">
          <h1 className="headline-style font-inferi mb-6 tracking-tight animate-slide-up">
            Expert Aesthetic Dermatology. <br />
            <span className="text-black">Delivered Consistently.</span>
          </h1>

          <p className="description-style font-basis mb-8 text-gray-800 animate-slide-up animation-delay-200">
            Doctor-led aesthetic clinics bringing together skin, hair, laser, and injectables under one trusted network.
          </p>

          <div className="mb-10 animate-slide-up animation-delay-400">
            <span className="general-style font-basis block text-gray-700">
              Medical expertise &bull; Proven protocols &bull; Transparent outcomes
            </span>
          </div>

          <Link href="/find-clinic" className="btn-primary inline-block text-center w-full sm:w-auto animate-slide-up animation-delay-600">
            Find a Clinic Near You
          </Link>
        </div>
      </div>
    </div>
  );
}
