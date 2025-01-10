import SectionTitle from "../common/SectionTitle";
import ScreenWrapper from "../common/ScreenWrapper";

const industries = [
  {
    title: "IT Industries",
    description:
      "SkedGroup offers top-tier industriess tailored to elevate your IT endeavours. With a steadfast commitment to quality. We ensure seamless solutions that propel your business forward. ",
    image:
      "https://www.skedgroup.in/assets/theme1/home/industry-1-916719fd236276b398963b9f3010d7583020ff1558997ba7c0ee8702eab1a0ef.jpg",
  },
  {
    title: "Education",
    description:
      "Enhance your educational journey with our bespoke solutions, meticulously crafted to cater to the specific demands of the education sector. Experience elevated learning through our personalized approach.",
    image:
      "https://www.skedgroup.in/assets/theme1/home/industry-2-a59cae868aac234b6b17981b52b787c3a3ed56b1efab2b35b80840dfa27c9b1d.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Tailored premium solutions meet industry demands, enhancing patient care and operational efficiency. Our focus on excellence drives optimal outcomes and streamlined workflows.",
    image:
      "https://www.skedgroup.in/assets/theme1/home/industry-3-4c98b723dc177cc40e72fe01054d0dbfa4896e7ce6ac0cff83e5de444ba7c9ac.jpg",
  },
];

const Industries = () => {
  return (
    <ScreenWrapper>
      <section className="relative sm:px-6 md:px-8 lg:px-10">
        <div className="relative mb-16 lg:my-20" data-aos="zoom-in">
          <div className="relative w-full">
            <div className="relative">
              <img
                src="https://www.skedgroup.in/assets/theme1/home/video-banner-2d1d551a1daa0dd339e0800f4d6086afb2c322896dac7402e56364acaa677227.png"
                alt="Video banner background"
                className="w-full h-full object-cover brightness-50"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
              Want to Create <br /> Something Beautiful?
            </h2>

            <ul className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
              <li>
                <a
                  href="/services"
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-white hover:text-gray-200 transition-colors"
                >
                  <span className="text-base sm:text-lg md:text-xl">
                    New Business
                  </span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-white hover:text-gray-200 transition-colors"
                >
                  <span className="text-base sm:text-lg md:text-xl">
                    Inquiry
                  </span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div>
            <SectionTitle
              leftTitle="Industries"
              rightTitle="Skedgroup Serves"
              aos="fade-right"
              aosDuration="700"
            />
            <p
              className="text-3xl text-gray-500 mt-3"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Skedgroup serves various industries with skilled experts
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {industries.map((industries, index) => (
              <div
                key={index}
                className="group bg-white p-8 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1b60a5] hover:text-white mt-5 "
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industries.image}
                    alt={industries.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="py-5">
                  <h3 className="text-xl font-semibold mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-black after:group-hover:bg-white">
                    {industries.title}
                  </h3>
                  <p className="group-hover:text-white/90 transition-colors duration-300">
                    {industries.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScreenWrapper>
  );
};

export default Industries;
