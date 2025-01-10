import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>

    <footer className="bg-[#2E82D0] pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <img
              src="https://www.skedgroup.in/assets/theme1/footer-sked-logo-a6741b92b3092c00497c250366adfa064ab07961dac90dd300fb760b46f4b6e3.svg"
              alt="SkedGroup"
              className="h-24 mb-6"
            />
            <p className="text-white text-base mb-8 leading-relaxed">
              Innovative integration of digital solutions, business strategies,
              and cutting-edge technology to develop advanced software products.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
              >
                <FaLinkedinIn className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
              >
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-2xl mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Life@skedgroup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-1"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-2xl mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918818881807"
                  className="flex items-center space-x-3 text-white hover:text-gray-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 8818 8818 07</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@skedgroup.in"
                  className="flex items-center space-x-3 text-white hover:text-gray-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@skedgroup.in</span>
                </a>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="w-5 h-5 text-white flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="text-white not-italic leading-relaxed">
                  Shop No. 04, Kaladhungi, Nainital, Uttarakhand, India, 263140.
                </address>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-2xl mb-6">
              Subscribe Us
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Subscribe our newsletter for the latest updates and exclusive
              content.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/60 rounded focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-1.5 bg-white text-[#2E82D0] rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              Copyright © 2024{" "}
              <a href="#" className="hover:underline">
                Sked Group Innovations Pvt. Ltd.
              </a>
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white text-sm hover:underline">
                Terms & Condition
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-white text-sm hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
    </>
  );
};

export default Footer;
