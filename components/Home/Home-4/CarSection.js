import Image from "next/image";

const cars = [
  { car: "LEXUS UX", image: "/home_4_images/car1.png" },
  { car: "BMW 3 sedan", image: "/home_4_images/car2.png" },
  { car: "LEXUS UX", image: "/home_4_images/car1.png" },
  { car: "BMW 3 sedan", image: "/home_4_images/car2.png" },
  { car: "LEXUS UX", image: "/home_4_images/car1.png" },
  { car: "BMW 3 sedan", image: "/home_4_images/car2.png" },
  { car: "LEXUS UX", image: "/home_4_images/car1.png" },
  { car: "BMW 3 sedan", image: "/home_4_images/car2.png" },
];

function CarSection() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 w-full pb-10 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium text-indigo-500 title-font mb-2">
              Chose your Ride!
            </h1>
            <div className="h-1 w-20 bg-gray-500 rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* MAP CAR ARRAY */}

            {cars.map((car, index) => {
              return (
                <div
                  className="lg:w-[23%] md:w-[45%] p-4 w-full bg-slate-50 m-1"
                  key={index}
                >
                  <a className="block relative h-48 w-full rounded overflow-hidden">
                    <Image
                      alt={car.car}
                      className="object-cover object-center "
                      src={car.image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        SEDAN
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {car.car}
                      </h2>
                      <p className="my-2">$16.00 / day</p>
                    </div>
                    <button className="text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-8 mt-auto">
                      Rent Car
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CarSection;
