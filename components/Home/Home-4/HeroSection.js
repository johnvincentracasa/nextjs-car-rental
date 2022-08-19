// import bakcground image from public image

function HeroSection() {
  return (
    <>
      <section
        className="text-gray-600 body-font h-full"
        style={{
          // background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg');
          background: "linearGradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          backgroundImage: `url(/home_4_images/hero_background_4.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center h-[80vh]">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center  md:w-1/2 w-5/6 mb-10 md:mb-0 max-w-1/2">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Car? We got it all
            </h1>

            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label className="leading-7 text-sm text-gray-600">
                  Search your ride
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className=" cursor-pointer inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Search
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Why buy a car, when you can rent one like you own it!
            </p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span className="flex items-start flex-col leading-none">
                  <span className="title-font font-medium">Get a Ride</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <span className="flex items-start flex-col leading-none">
                  <span className="title-font font-medium">See all Cars</span>
                </span>
              </button>
            </div>
          </div>

          <div className="max-w-lg lg:w-full ms:ml-4">
            <img
              className=" object-center rounded h-full w-full object-contain"
              alt="hero"
              src="/home_4_images/hero_image.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
