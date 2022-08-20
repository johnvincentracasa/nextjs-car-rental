import React from "react";
import Image from "next/image";

function Hero2() {
  return (
    <>
      <section className="skewed-bottom-right ">
        <div className="bg-green-600 pt-12 lg:pt-20 pb-20 radius-for-skewed ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left grid place-content-center ">
                  <div className="max-w-md mx-auto lg:mx-0 text-white">
                    <h2 className="mb-3 text-4xl lg:text-5xl text-white font-bold">
                      Easy &amp; and Fast way To Rent a Car
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-50 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <a
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-white hover:bg-gray-50 text-green-600 font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        Get Started
                      </a>
                      <a
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-green-600 border-2 border-green-400 hover:border-green-500 rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative">
                  <Image
                    height={300}
                    width={600}
                    className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                    src="/home-1/car.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-green-600"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero2;
