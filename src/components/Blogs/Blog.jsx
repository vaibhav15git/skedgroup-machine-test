import ScreenWrapper from "../common/ScreenWrapper";
import SectionTitle from "../common/SectionTitle";

const Blogs = () => {
  return (
    <>
      <ScreenWrapper>
        <div>
          <SectionTitle
            leftTitle="Our Latest "
            rightTitle="Blog Posts"
            aos="fade-right"
            aosDuration="700"
          />
          <p
            className="text-3xl text-gray-500 mt-3"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Discover a World of Insights Dive into Our Latest Blogs
          </p>
        </div>
        <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://www.skedgroup.in/assets/theme1/home/blog-img-1-2a98194a1fc61004d78c8924d27bd296a4d881a259213739a460c1a9a9abd051.jpg"
                alt="Business Analytics Dashboard"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#2E82D0] text-white px-4 py-2 rounded flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Jan, 2023</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How to increase your business with us
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard How
                to increase your business with us dummy text ever since the
                1500s.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#2E82D0] hover:text-blue-700"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://www.skedgroup.in/assets/theme1/home/blog-img-2-5529376ce18ae7df0cefa712492f03fda647b585faffed888d128354aaa6307a.png"
                  alt="Team Meeting"
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#2E82D0] text-white px-4 py-2 rounded flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">Jan, 2023</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Grow your online presence
                </h2>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://www.skedgroup.in/assets/theme1/home/blog-img-3-f9157b231b04d2594966e1e03bc9af2c43ddf6839889a4bb875b2103e74c9499.png"
                  alt="Woman Working"
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-[#2E82D0] text-white px-4 py-2 rounded flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">Jan, 2023</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  How to increase your business
                </h2>
              </div>
            </div>
          </div>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Blogs;
