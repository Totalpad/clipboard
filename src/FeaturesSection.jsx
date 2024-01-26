import comp from "./assets/image-computer.png";

function FeaturesSection() {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className=" relative flex flex-col justify-center md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={comp} alt="" className="right-[50%] top-0 md:absolute " />
          </div>
          {/* Items Container */}
          <div className="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            {/* 1 items */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* 2 items */}
            <div>
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* 3 items */}
            <div>
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
