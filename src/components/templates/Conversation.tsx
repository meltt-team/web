"use client";

// External modules and React-related imports
import Image from "next/image";

function Conversation({ language }: { language: string }) {
  const imagePath = language === "es" ? "/chat_es.png" : "/chat_en.png";
  return (
    <div className="relative w-full max-w-sm mx-auto py-12 px-4">
      {/* Right Profile Card */}
      <div className="relative">
        <div className="relative flex justify-center items-center">
          <Image
            src={imagePath}
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
