"use client";

// External modules and React-related imports
import Image from "next/image";

const colorMap = {
  pink: "#FAC2EA",
  yellow: "#EFDE4E",
  white: "#FFFFFF",
};

function Deck() {
  const interests = [
    { label: "Festival", color: "yellow" },
    { label: "Club", color: "white" },
    { label: "Bar", color: "pink" },
    { label: "Events", color: "white" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Container for the deck */}
      <div className="relative flex justify-center items-center">
        {/* Back card - slightly rotated */}
        <div className="relative">
          <Image
            src="/couple.png"
            alt="Profile back"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
          />
        </div>

        {/* Interest tags - Left side */}
        <div
          className={`px-4 py-1 text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[-00px] z-30`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["yellow"],
          }}
        >
          <p>Festival</p>
        </div>
        <div
          className={`px-4 py-1 border border-border text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[40px] z-30`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["white"],
          }}
        >
          <p>Club</p>
        </div>

        <div
          className={`px-4 py-1 text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[80px] z-30`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["pink"],
          }}
        >
          <p>Bar</p>
        </div>
        <div
          className={`px-4 py-1 border border-border text-center rounded-full font-inter font-bold text-sm text-primary absolute top-[120px] z-30`}
          style={{
            boxShadow: "0 2px 8px rgba(21, 19, 19, 0.1)",
            backgroundColor: colorMap["white"],
          }}
        >
          <p>Events</p>
        </div>
      </div>
    </div>
  );
}

export default Deck;
