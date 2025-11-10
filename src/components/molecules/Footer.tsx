import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <Image src="/logo.svg" alt="Meltt Logo" width={100} height={30} />

          {/* Copyright Text */}
          <div className="text-center text-md font-inter font-bold">
            The dating app that happens in real life.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
