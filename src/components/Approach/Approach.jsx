import { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";

const Approach = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1200,
      });
    });
  }, []);

  // Data for each card
  const cardData = [
    {
      title: "Design",
      icon: "https://static.thenounproject.com/png/7210045-512.png",
      description:
        "Creating user interfaces and user experiences that are visually appealing, intuitive, and functional for software applications.",
      textColor: "text-sked-blue",
    },
    {
      title: "Development",
      icon: "https://static.thenounproject.com/png/7210045-512.png",
      description:
        "Building and coding software solutions, applications, and systems tailored to meet specific client requirements.",
      textColor: "text-sked-blue",
    },
    {
      title: "Support",
      icon: "https://static.thenounproject.com/png/7210045-512.png",
      description:
        "Providing technical assistance, troubleshooting, and resolving issues for clients and end-users using the software.",
      textColor: "text-sked-blue",
    },
    {
      title: "Maintenance",
      icon: "https://static.thenounproject.com/png/7210045-512.png",
      description:
        "Regularly updating and enhancing software to ensure its security, efficiency & compatibility with evolving technologies and needs.",
      textColor: "text-sked-blue",
    },
  ];

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <SectionTitle
            leftTitle="Our Comprehensive"
            rightTitle="Web Solutions"
            aos="fade-right"
            aosDuration="700"
          />
          <p
            className="text-3xl text-gray-500 mt-3"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            From design to maintenance, we have got you <br /> covered every step of
            the way.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-8 h-full group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1b60a5] hover:text-white"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 mb-6">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-6 pb-4 relative ${card.textColor} group-hover:text-white`}
                >
                  {card.title}
                  <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-black after:group-hover:bg-white"></span>
                </h3>
                <p className="hover:text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
