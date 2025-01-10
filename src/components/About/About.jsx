import React from 'react';
import ScreenWrapper from '../common/ScreenWrapper';

const About = () => {
  const stats = [
    { icon: "⭐", number: "400+", label: "Business Advice" },
    { icon: "🛡️", number: "100+", label: "Happy Customers" },
    { icon: "🤝", number: "50+", label: "Market Experiences" }
  ];

  return (
   <>
   <ScreenWrapper>
   <div className="bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Overlay */}
          <div className="relative" data-aos="fade-right" data-duration-aos="700">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://www.skedgroup.in/assets/theme1/home/about-53420908795e4960782d7dd7d14c6249f3cf22e4265c3f747b52f7acff4dd9a3.png" 
                alt="Team working together" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-sked-blue text-white p-8 rounded-tl-lg">
              <h2 className="text-2xl font-bold">
                Improve<br />
                Your<br />
                Business
              </h2>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8" >
            <div data-aos="fade-right" data-duration-aos="900">
              <h1 className="text-4xl font-bold text-sked-blue mb-4">
                Consulting and<br />
                Business Solutions
              </h1>
              <p className="text-2xl text-gray-600 mb-8" >
                Your Gateway to Software Success!!
              </p>
            </div>

            <div className="space-y-6 text-gray-600">
              <p>
                At Consulting and Business Solutions, we pride ourselves on being the forefront of innovation and excellence in the realm of IT consulting and software development. With a commitment to providing tailored solutions that align with our clients&apos; unique needs, we strive to empower businesses to thrive in the ever-evolving digital landscape.
              </p>
              <p>
                Our seasoned team of IT consultants possesses a wealth of experience and expertise across various industries. We work closely with clients to assess their current IT infrastructure, identify areas for improvement, and devise comprehensive strategies to optimise performance, enhance security, and streamline operations.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mt-12" data-aos="fade-down" data-duration-aos="700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-sked-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   </ScreenWrapper>
   </>
  );
};

export default About;