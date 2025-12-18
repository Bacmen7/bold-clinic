import Image from "next/image";

export default function NetworkMap() {
  return (
    <section className="w-full bg-[#FFF9EC] py-12 lg:py-16 border-b border-[#ECDCCD] px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left: India Map */}
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
            <Image
              src="/india.png"
              alt="Bold Clinics across India"
              width={1100}
              height={1400}
              className="w-full h-auto max-w-[750px] md:max-w-[950px] lg:max-w-full"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full lg:w-[45%] flex items-center lg:mt-16">
            <p
              style={{
                fontFamily: "Lora, 'Lora Fallback', Lora, serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "42px",
                color: "rgb(0,0,0)",
              }}
              className="leading-[1.2]"
            >
              Our network brings together leading aesthetic dermatologists, delivering care to thousands of patients across cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
