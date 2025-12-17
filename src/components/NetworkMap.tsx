import Image from "next/image";

export default function NetworkMap() {
  return (
    <section className="w-full bg-[#FCF4E9] py-12 lg:py-16 border-b border-[#ECDCCD] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            {/* changed: apply Lora font, 47px size, 52px line-height, weight 400 */}
            <p
              style={{
                fontFamily: "Lora, 'Lora Fallback', Lora, serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "44px",
                lineHeight: "52px",
                color: "rgb(0,0,0)",
              }}
              className="leading-[1.2]"
            >
              Our network brings together leading aesthetic dermatologists, delivering care to thousands of patients across cities.
            </p>
          </div>
          {/* Right: India Map */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* changed: reduced image container sizes */}
            <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px]">
              <Image
                src="/india.png"
                alt="Bold Clinics across India"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
