function CtaSection() {
  return (
    <section id="bottom">
      <div className="section-container my-20 ">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="section-content mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
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

export default CtaSection;
