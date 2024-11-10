const Banner = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col sm:flex-row items-center max-w-screen-2xl px-4 py-2 mx-auto gap-8">
          {/* Image displayed on screens down to 450px and hidden below that */}
          <div className="flex-1 flex justify-center mb-4 sm:mb-0 sm:flex-row sm:order-1">
            <img
              src="/banner2.gif"
              alt="banner pic"
              className="w-full h-auto max-w-full border-x-transparent shadow-lg animate-spin-5s sm:max-w-[350px] md:max-w-[375px] lg:max-w-sm rounded-full "
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left flex flex-col">
            <h1 className="max-w-2xl text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-myRed mb-4">
              DoniaSweets: Your Destination for Delightful Treats!
            </h1>
            <p className="max-w-2xl font-light text-gray-900 text-base sm:text-lg md:text-xl lg:text-xl dark:text-gray-400 mb-6">
              Every treat is a blend of tradition and indulgence, crafted to perfection for your sweetest moments.
              Whether it's a special occasion or a simple craving, our confections promise to delight your taste buds!
            </p>

            {/* Buttons in a row on all screens */}
            <div className="flex flex-row gap-4 items-center justify-center sm:justify-start">
              <a
                href="#cakes"
                className="bg-emerald-300 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-myRed rounded-lg shadow-md hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-colors duration-300 whitespace-nowrap"
              >
                Buy Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-myRed border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-colors duration-300 whitespace-nowrap"
              >
                Speak to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
