import LogoSvg from "./LogoSvg";

function HeroSection() {
  return (
    <section id="hero">
      <div className="section-container mb-40 px-10 pt-16">
        <LogoSvg />
        <h3>A history of everything you copy</h3>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* Button Container */}

        <div className="flex w-full flex-col justify-center space-y-6 text-xl text-white md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="#"
            className=" rounded-full  bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:scale-105 hover:opacity-85 hover:shadow-2xl hover:shadow-strongCyan/60"
          >
            Download for IOS
          </a>
          <a
            href="#"
            className=" rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:scale-105 hover:opacity-85 hover:shadow-2xl hover:shadow-lightBlue/60"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
