// External modules and React-related imports
import Image from "next/image";

function Story() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        {/* Heart Icon with Glow Effect */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <Image
            src="/hearty.png"
            alt="Heart"
            width={130}
            height={130}
          />
        </div>

        {/* Main Heading */}
        <h2 className="font-vollkorn font-bold text-2xl md:text-4xl lg:text-5xl text-primary max-w-3xl">
          Ever liked someone at a bar but never talked to them? What a waste,
          right?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg pt-4 text-gray-500 max-w-2xl">
          We built MeItt so that moment doesn&apos;t go to waste.
        </p>
      </div>
    </div>
  );
}

export default Story;
