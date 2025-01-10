import ScreenWrapper from "../common/ScreenWrapper";

const Banner = () => {
  return (
    <>
      <ScreenWrapper>
        <div className="">
          <section className="relative banner-section">
            <div className="banner-row flex width-[90%] flex-wrap justify-between gap-1 relative pb-2 mb-4 mb-md-2 pb-md-5 mb-md-3">
              {/* Large Screens (3 images) */}
              <div className="flex justify-center items-center w-[500px] h-[600px] hidden md:block">
                <figure className="w-full h-full">
                  <img
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                    src="https://www.skedgroup.in/assets/theme1/home/banner-img-1-bfaa7453f8f96ed32718286d99c83c6cec70cc1985121f80e4be3269ecd40064.png"
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center w-[500px] h-[600px] hidden md:block">
                <figure className="w-full h-full">
                  <img
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                    src="https://www.skedgroup.in/assets/theme1/home/banner-img-2-9aa6e0c0be6068aec10ca12c5677698b9505dd6024275b06448cc81de8b7b941.png"
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center w-[500px] h-[600px] hidden md:block">
                <figure className="w-full h-full">
                  <img
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                    src="https://www.skedgroup.in/assets/theme1/home/banner-img-3-715cd6a2f9647bec176167c1189bcf32b53a4cbc28cf9a8fb877aa22a52a3047.png"
                  />
                </figure>
              </div>

              {/* Small to Medium Screens (only one image) */}
              <div className="flex justify-center items-center w-full h-[400px] sm:w-[500px] sm:h-[600px] md:hidden">
                <figure className="w-full h-full">
                  <img
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                    src="https://www.skedgroup.in/assets/theme1/home/banner-img-1-bfaa7453f8f96ed32718286d99c83c6cec70cc1985121f80e4be3269ecd40064.png"
                  />
                </figure>
              </div>

            </div>
          </section>
        </div>
      </ScreenWrapper>
    </>
  );
};

export default Banner;
