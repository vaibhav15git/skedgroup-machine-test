import ScreenWrapper from "../common/ScreenWrapper";
import SectionTitle from "../common/SectionTitle";

const Technology = () => {
  const technologies = [
    // First row
    {
      name: "HTML5",
      icon: "https://www.skedgroup.in/assets/theme1/home/html-logo-877213c3c2f2e95dff7fffe17827df502b76e3fcf000dad7f770326ba8296ed8.png",
    },
    {
      name: "CSS3",
      icon: "https://www.skedgroup.in/assets/theme1/home/css-logo-19a7b7f6b5e2029dfbb1400e639e064dea94a0f4b682243c00e73a422b0e3a5d.png",
    },
    {
      name: "Ruby",
      icon: "https://www.skedgroup.in/assets/theme1/home/ruby-logo-1a8e4d05f33997aceb9d4d752b86a26547d5c1771926c22f9c2bdb3237e152ce.png",
    },
    {
      name: "Rails",
      icon: "https://www.skedgroup.in/assets/theme1/home/rails-logo-852cffe23c93f18fbad1b4757e920abd52f20e1c729f35c097e5f373c0f4434d.png",
    },
    {
      name: "Figma",
      icon: "https://www.skedgroup.in/assets/theme1/home/figma-logo-f77af2e040ea121e58f2245b864eabad628800a2288a97a7baeedde0ed99aa91.png",
    },

    // Second row
    {
      name: "Bootstrap",
      icon: "https://www.skedgroup.in/assets/theme1/home/bootstrap-logo-d29fedb7a6e10b2f65198ff409e3b47788fcfc6458982764c499f19813643a7f.png",
    },
    {
      name: "Photoshop",
      icon: "https://www.skedgroup.in/assets/theme1/home/photoshop-logo-e8baa0843d50ea6d760ad44200438f896b1d8fcf3d46282d24ede30496b04b0c.png",
    },
    {
      name: "JavaScript",
      icon: "https://www.skedgroup.in/assets/theme1/home/javascript-logo-777c5315cc1b8118344e6d5a31f0aacfdea805f3ecd95bec734bf14e2795a4c0.png",
    },
    {
      name: "GitHub",
      icon: "https://www.skedgroup.in/assets/theme1/home/github-logo-e75cbec8c328375175bac4d4b24e7b2563d15b8de709c85fe57259cf305113d1.png",
    },

    // Third row
    {
      name: "React",
      icon: "https://www.skedgroup.in/assets/theme1/home/react-logo-a7be52b83c7131e8b70b44dc5f617e5df31517f067cad39ad80ef6251b7fe879.png",
    },
    {
      name: "Rails",
      icon: "https://www.skedgroup.in/assets/theme1/home/rails-logo-852cffe23c93f18fbad1b4757e920abd52f20e1c729f35c097e5f373c0f4434d.png",
    },
    {
      name: "Python",
      icon: "https://www.skedgroup.in/assets/theme1/home/python-logo-ff4adad1bcfb13cb89fce92c5b0aa097782cfbba5655f19d96ff3f45c956b8f7.png",
    },
    {
      name: "Node.js",
      icon: "https://www.skedgroup.in/assets/theme1/home/node-js-logo-3f56482f4cd6da51e68c41ee30c167bc2dcb25870a16ea8e1962ad7af9f96d43.png",
    },
    {
      name: "Django",
      icon: "https://www.skedgroup.in/assets/theme1/home/django-logo-fd05a56eaeea9cb1923b33ccd247a0b74e3ae3b9f06801a1eda589aa5883ebab.png",
    },
    {
      name: "Redux",
      icon: "https://www.skedgroup.in/assets/theme1/home/figma-logo-f77af2e040ea121e58f2245b864eabad628800a2288a97a7baeedde0ed99aa91.png",
    },
  ];

  return (
    <>
      <ScreenWrapper>
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
        <div className="mx-auto py-6 px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center bottom-5"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-10 relative">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Technology;
