import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LogoSvg from "./LogoSvg";
import TwitterIcon from "./TwitterIcon";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <svg
            width="125"
            height="125"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-50"
          >
            <g
              stroke="#26BBA4"
              stroke-width="10"
              fill="none"
              fill-rule="evenodd"
            >
              <circle cx="62.5" cy="62.5" r="57.5" />
              <path
                d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
                stroke-linecap="round"
              />
            </g>
          </svg>
          <div className="itmes-cente mb-10 flex flex-1 flex-col justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* links containers */}
            <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className=" duration-150 hover:text-strongCyan">
                  FAQs
                </a>
                <a href="#" className=" duration-150 hover:text-strongCyan">
                  Contact Us
                </a>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className=" duration-150 hover:text-strongCyan">
                  Privacy Policy
                </a>
                <a href="#" className=" duration-150 hover:text-strongCyan">
                  Press Kit
                </a>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className=" duration-150 hover:text-strongCyan">
                  Install Guide
                </a>
              </div>
            </div>

            {/* Socials container */}
            <div className="flex w-32 justify-between py-1">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
