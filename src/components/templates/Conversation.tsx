"use client";

// External modules and React-related imports
import Image from "next/image";

function Conversation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      {/* Container for the two profile cards */}
      <div className="relative flex justify-center items-center min-h-[400px]">
        
        {/* Left Profile Card */}
        <div 
          className="absolute left-0 md:left-12 top-0 z-10"
          style={{ transform: "rotate(-8deg)" }}
        >
          <div className="relative w-[200px] h-[260px] md:w-[260px] md:h-[340px] rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/landing_desktop.png"
              alt="Profile 1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Profile Card */}
        <div 
          className="absolute right-0 md:right-12 top-8 z-20"
          style={{ transform: "rotate(8deg)" }}
        >
          <div className="relative w-[200px] h-[260px] md:w-[260px] md:h-[340px] rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="/landing_desktop.png"
              alt="Profile 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Chat Bubble 1 - Left (Pink) */}
        <div 
          className="absolute left-[120px] md:left-[240px] top-[100px] md:top-[140px] z-30 max-w-[180px] md:max-w-[240px]"
        >
          <div className="relative bg-brand-light text-white px-3 py-2 rounded-3xl ">
            <p className="text-md font-inter font-bold text-primary md:text-base">
              Let&apos;s grab a drink?
            </p>
            {/* Speech bubble tail */}
            <div 
              className="absolute -left-2 top-3 w-4 h-4 bg-brand-light"
              style={{
                clipPath: "polygon(100% 0, 0 50%, 100% 100%)"
              }}
            />
          </div>
        </div>

        {/* Chat Bubble 2 - Right (White) */}
        <div 
          className="absolute right-[100px] md:right-[220px] top-[200px] md:top-[260px] z-30 max-w-[200px] md:max-w-[260px]"
        >
          <div className="relative bg-white text-primary px-3 py-2 rounded-3xl  border border-[#CACACA]">
            <p className="text-md font-inter font-bold text-primary md:text-base">
              Sure! Meet you at the bar in 5 minutes
            </p>
            {/* Speech bubble tail */}
            <div 
              className="absolute -right-2 top-6 w-4 h-4 bg-white border-r border-b border-[#CACACA]"
              style={{
                clipPath: "polygon(0 0, 100% 50%, 0 100%)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;