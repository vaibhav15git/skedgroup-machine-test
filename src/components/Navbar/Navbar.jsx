import { useState } from "react";
import ScreenWrapper from "../common/ScreenWrapper";
import { IoCallOutline } from "react-icons/io5";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // Importing dropdown arrow icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <ScreenWrapper>
        <div>
          <nav className="bg-white px-4 lg:px-6 py-2.5 fixed sm:fixed top-0 left-0 w-full z-50">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
              <a href="#" className="flex items-center">
                <img
                  src="https://www.skedgroup.in/assets/theme1/sked-logo-9cf87915c9f85fa606e6fa3f0d94b941020b664f3dbb74aeeb3000dd4d9a9ec3.svg"
                  className="mr-3 h-10 sm:h-12 md:h-16 lg:h-16"
                  alt="Logo"
                />
              </a>
              <div className="flex items-center lg:order-2">
                <div className="hidden md:flex xl:flexitems-center justify-center">
                  <div className="flex items-center space-x-6">
                    <div className="w-10 flex items-center justify-center border-r-2 pr-2">
                      <IoCallOutline
                        style={{
                          fontSize: "50px",
                          color: "#1b60a5",
                        }}
                      />
                    </div>
                    <div className="flex">
                      <p className="info flex flex-col mb-0 text-center md:text-left mt-2">
                        <span className="text-[12px] text-gray-500">
                          Have any Question?
                        </span>
                        <a
                          className="number text-black font-bold text-[15px] mt-2 me-4"
                          href="tel:+918818881807"
                        >
                          +918818881807
                        </a>
                      </p>
                      <a
                        className="button button-primary inline-block mt-2 text-white bg-[#1b60a5] px-4 py-3"
                        href="/contact"
                      >
                        Start Project
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleMenuToggle}
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="mobile-menu-2"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={handleServicesToggle}
                      className="block py-2 pr-4 pl-3 text-black hover:text-sked-blue lg:bg-transparent lg:text-primary-700 lg:p-0 flex items-center"
                    >
                      Services
                      {isServicesOpen ? (
                        <HiChevronUp className="ml-2 text-lg" />
                      ) : (
                        <HiChevronDown className="ml-2 text-lg" />
                      )}
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 mt-2 bg-gray-50 divide-y divide-gray-100 border-t-4 rounded-lg shadow w-60 py-2 px-4 ">
                        <ul className="text-sm text-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Application Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Full Stack Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              SEO Optimization
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              CMS Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Game/Plugin Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Digital Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              UI/UX Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              E-Commerce Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Our Process
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Navbar;
