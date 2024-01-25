import LogoSvg from "./LogoSvg";

function HeroSection() {
  return (
    <section id="hero">
      <div className="max-w-6x mx-auto mb-40 px-10 pt-16 text-center">
        <LogoSvg />
        <h3 className="text-darkGrayishBlue mb-8 text-4xl font-bold md:text-5xl">
          A history of everything you copy
        </h3>
        <p className="text-grayishBlue mx-auto mb-10 max-w-3xl text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* Button Container */}

        <div className="flex w-full flex-col justify-center space-y-6 text-xl text-white md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="#"
            className=" bg-strongCyan  rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-85"
          >
            Download for IOS
          </a>
          <a
            href="#"
            className=" bg-lightBlue rounded-full p-4 px-8 shadow-lg duration-200 hover:opacity-85"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
