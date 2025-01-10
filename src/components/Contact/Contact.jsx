import { useState } from 'react';
import { User, Mail, Phone, Headphones } from 'lucide-react';
import ScreenWrapper from '../common/ScreenWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
  <>
   <ScreenWrapper>
   <div className="bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Project text */}
        <div className="space-y-12 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Let&apos;s make<br />project
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-lg sm:text-xl font-semibold">LET&apos;S GET STARTED</span>
            <div className="w-16 h-16 ">
              <div className="">
                <i><img src="https://www.skedgroup.in/assets/theme1/contact-arrow-633bf95d1e1e0d41de4f5ec5b36139c2d180a78161ff29b45f914cacf88b99a9.svg" alt="arrow" /></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-lg shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-sked-blue mb-4">Request a Call Back</h2>
            <p className="text-gray-600 text-sm sm:text-base">For personalized business solutions, request a call with our team.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-sked-blue bg-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-sked-blue bg-transparent outline-none"
                />
              </div>

              <div className="relative">
                <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-sked-blue bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <Headphones className="absolute top-3 left-3 text-gray-400" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can our resources contribute to your business's success."
                rows="3"
                className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-sked-blue bg-transparent outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
   </ScreenWrapper>
  </>
  );
};

export default Contact;
