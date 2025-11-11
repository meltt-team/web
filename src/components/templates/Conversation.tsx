"use client";

// External modules and React-related imports
import Image from "next/image";

function Conversation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      {/* Right Profile Card */}
      <div className="relative">
        <div className="relative flex justify-center items-center">
          <Image
            src="/chat.png"
            alt="Profile 2"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
