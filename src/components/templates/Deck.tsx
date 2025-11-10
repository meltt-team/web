"use client";

// External modules and React-related imports
import Image from "next/image";

function Deck() {
  const interests = [
    { label: "Festival", highlighted: true },
    { label: "Club", highlighted: false },
    { label: "Bar", highlighted: false },
    { label: "Events", highlighted: false },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      {/* Container for the deck */}
      <div className="relative flex justify-center items-center min-h-[500px]">
        
        {/* Back card - slightly rotated */}
        <div 
          className="absolute top-2 z-10"
          style={{ transform: "rotate(5deg)" }}
        >
          <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-3xl overflow-hidden bg-gray-300">
            <Image
              src="/landing_desktop.png"
              alt="Profile back"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Front card - main profile */}
        <div 
          className="relative z-20"
          style={{ transform: "rotate(-3deg)" }}
        >
          <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-3xl overflow-hidden bg-gray-200">
            <Image
              src="/landing_desktop.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Interest tags - Left side */}
        <div className="absolute left-0 md:left-8 top-[80px] z-30 flex flex-col gap-2">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`px-4 py-1 text-center rounded-full font-inter font-bold text-sm ${
                interest.highlighted
                  ? "bg-[#FFE56D] text-primary"
                  : "bg-white text-primary border border-[#CACACA]"
              }`}
              style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
            >
              {interest.label}
            </div>
          ))}
        </div>

        {/* Location pin - Right side */}
        <div className="absolute right-4 md:right-12 bottom-[100px] z-30">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Distance indicator - Bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-primary" style={{ borderStyle: "dashed" }}>
            <span className="font-inter font-bold text-primary text-sm">
              2.5 km
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deck;

