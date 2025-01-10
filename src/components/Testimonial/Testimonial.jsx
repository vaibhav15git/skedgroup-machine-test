import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScreenWrapper from "../common/ScreenWrapper";


const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Alex Billy",
      image: "https://www.skedgroup.in/assets/theme1/home/client-img-1-9e47a6e10faaaf954151feadf7147a50d68087662cbc44fe8e7c01a47980c8a8.png",
      text: "Over the past four years, I have engaged in multiple projects with Sked Group, and I am thoroughly delighted with their contributions. They consistently address any queries that arise promptly, embodying a team that adeptly transforms my ideas into reality. I couldn't envision a more capable and responsive team to collaborate with."
    },
    {
      name: "Sarah Johnson",
      image: "https://www.skedgroup.in/assets/theme1/home/client-img-2-5558d7effc05a2e1c98972f335c1ccbdd1e2bfa00932cd15ab75f74dd8ea19be.jpg",
      text: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence has helped us achieve outstanding results."
    },
    {
      name: "Michael Chen",
      image: "https://www.skedgroup.in/assets/theme1/home/client-img-3-55140f1d894fb8b3d22979601940a7a58f09b0b81b571a3936c9fc49a667e398.jpg",
      text: "The level of professionalism and expertise demonstrated by the team is exceptional. They've consistently delivered beyond our expectations."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
   <>
   <ScreenWrapper>
   <div className="bg-blue-50 flex items-center justify-center px-4 pb-24 pt-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sked-blue mb-4">
            What Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600">
            Strategies for Ensuring Retained Clients Stay Content
          </p>
        </div>

        <div className="relative w-full">
          {/* Carousel wrapper */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full bg-sked-blue flex items-center justify-center">
                        {/* <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div> */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-44 h-44 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 max-w-2xl">
                      <p className="text-gray-600 text-lg mb-6">
                        {testimonial.text}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 z-30 transform -translate-y-1/2"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 z-30 transform -translate-y-1/2"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </span>
          </button>
        </div>
      </div>
    </div>
   </ScreenWrapper>
   </>
  );
};

export default Testimonial;