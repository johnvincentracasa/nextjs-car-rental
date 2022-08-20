import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <>
      <section className="">
        <div className="container px-4 mx-auto">
          <div className="relative py-11 px-16 bg-green-500 rounded-md overflow-hidden">
            <div className="relative z-20 flex flex-wrap items-center -m-3">
              <div className="w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white tracking-tighter">
                  Ideal banner asset for your dashboard project
                </h2>
                <p className="font-semibold text-coolGray-200">
                  Go global with our UI Resources and solutions
                </p>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <button className="block md:ml-auto px-7 py-4 font-medium text-lg text-coolGray-800 bg-white hover:bg-coolGray-50 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
