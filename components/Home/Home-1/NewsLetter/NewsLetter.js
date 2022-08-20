import React from "react";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <>
      <section className=" bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-white overflow-hidden rounded-10 shadow-5xl">
            <div className="flex flex-wrap items-center -m-6">
              <div className="w-full md:w-1/2 p-6">
                <Image
                height={300}
                width={500}
                  className="relative -left-10"
                  src="/Home-1/car.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 p-12">
                <div className="md:max-w-md">
                  <h2 className="mb-2.5 font-heading font-semibold text-4xl sm:text-5xl text-gray-900">
                    Join 49,500+ people on our newsletter
                  </h2>
                  <p className="mb-9 text-gray-700">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing.
                  </p>
                  <p className="text-sm text-gray-900 mb-3">Email</p>
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-full md:flex-1 lg:w-auto p-1.5">
                      <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                        <input
                          className="w-full px-5 py-4 text-sm text-gray-500 placeholder-gray-500 bg-white outline-none rounded-md"
                          type="text"
                          placeholder="Enter email to get started"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-auto p-1.5">
                      <button className="group relative font-heading py-4 px-9 block w-full md:w-auto text-base text-white font-medium bg-gray-900 overflow-hidden rounded-lg">
                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan"></div>
                        <p className="relative z-10">Join Now</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
