
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS CSS
import ScreenWrapper from "../common/ScreenWrapper";
import SectionTitle from "../common/SectionTitle";
import { useState } from "react";

AOS.init(); // Initialize AOS animations globally

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Procurement Express",
      category: ["all", "web-development", "full-stack-development"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-1-f56e08ad505d890078ade7445e9889588fe3bfd669ce9d67cae5a9f246054791.png",
      description: "#1 Purchasing Software",
      tagline: "Take the Hassle out of Company Purchasing. Finally.",
    },
    {
      id: 2,
      title: "BookClass",
      category: ["all", "web-development", "web-design"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-2-5bd9b6c1a08a0ddfdff032aab9b365f82e004e47aa6bc071cf54a5755620e13f.png",
      description: "Online Session Platform",
      tagline: "Eat, Sleep, Register!",
    },
    {
      id: 3,
      title: "Atmago",
      category: ["all", "full-stack-development"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-3-69ed293e440ec6bd0b52ac6f126488e533742397814c4d50f7b0e56192621b2f.png",
      description: "Community Platform",
      tagline: "Gori Warga, Untuk Warga, Bantu Warga",
    },
    {
      id: 4,
      title: "Bloom Rx",
      category: ["all", "web-design"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-4-7032e89a68f5bc1d6a54ca179c8a8673ca0845c1974e5d0d493226385f826e65.png",
      description: "Health Platform",
      tagline: "Reimagine Your Health",
    },
    {
      id: 5,
      title: "Level Sense",
      category: ["all", "web-development"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-5-19e74bf7fc44ac975b8f10a6b22dee7258153367b6eeb588ab93255958fb028e.png",
      description: "IoT Platform",
      tagline: "Introducing Sump Alarm & Level Sense",
    },
    {
      id: 6,
      title: "UgMO",
      category: ["all", "full-stack-development", "web-design"],
      image:
        "https://www.skedgroup.in/assets/theme1/home/portfolio-6-04c3865924c1a5710bb72968d4ba5182f25faf4f270cbc693a80e86fe358eab8.png",
      description: "Technology Platform",
      tagline: "Simple, yet transformational.",
    },
  ];

  return (
    <>
      <ScreenWrapper>
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
        <div className="container mx-auto mt-10">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-2xl px-4 py-2 transition-all text-gray-600 hover:text-gray-900 whitespace-nowrap ${
                activeFilter === "all" && "border-b-2 border-blue-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("web-development")}
              className={`text-2xl px-4 py-2 transition-all text-gray-600 hover:text-gray-900 whitespace-nowrap ${
                activeFilter === "web-development" &&
                "border-b-2 border-blue-500"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveFilter("full-stack-development")}
              className={`text-2xl px-4 py-2 transition-all text-gray-600 hover:text-gray-900 whitespace-nowrap ${
                activeFilter === "full-stack-development" &&
                "border-b-2 border-blue-500"
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setActiveFilter("web-design")}
              className={`text-2xl px-4 py-2 transition-all text-gray-600 hover:text-gray-900 whitespace-nowrap ${
                activeFilter === "web-design" && "border-b-2 border-blue-500"
              }`}
            >
              Web Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems
              .filter((item) => item.category.includes(activeFilter))
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 transition-transform hover:scale-105"
                >
                  <div className="aspect-w-16 aspect-h-12 mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Info Box */}
                    <div
                      className="info-box absolute bottom-0 left-0 right-0 bg-sked-blue p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                      <hr />
                      <p className="text-xs mt-2 text-white">{item.tagline}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Portfolio;
