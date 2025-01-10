
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    title: "UI/UX Designing",
    description:
      "Our team of skilled designers and developers collaborate closely with you to create engaging user interfaces that enhance drive conversions.",
    image:
      "https://www.skedgroup.in/assets/theme1/home/service-img-2-0bd129321ba6480f6c2e72d990aedd25c981f93132971546a29f48326b13fe6f.jpg",
  },
  {
    title: "Human Resource Tool",
    description:
      "Tailored for modern businesses, our solution offers a comprehensive suite of features to enhance efficiency and productivity.",
    image:
      "https://www.skedgroup.in/assets/theme1/home/service-img-3-c0b0eea5717157a09b662683ae77cfc5d9a35f9bae4066ae5227df98fb2a42ac.jpeg",
  },
  {
    title: "CMS Development",
    description:
      "Our team of experienced professionals is committed to delivering top-notch guidance every step of the way, ensuring your website operates efficiently.",
    image:
      "https://www.skedgroup.in/assets/theme1/home/service-img-4-adc9c59cb5afbb2bf32ab2357aeb06aece8fef9f859ba496afc28ecb3bbf9f42.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div>
          <SectionTitle
            leftTitle="Innovative Service"
            rightTitle="Services"
            aos="fade-right"
            aosDuration="700"
          />
          <p
            className="text-3xl text-gray-500 mt-3"
            data-aos="fade-right"
            data-aos-duration="700"
          >
           We deal with all kind of services
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1b60a5] hover:text-white mt-5 "
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-5">
                <h3 className="text-xl font-semibold mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-black after:group-hover:bg-white">
                  {service.title}
                </h3>
                <p className="group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
