const rentCarAdvantages = [
  {
    advantage: "LOW COST AND AFFORDABILITY",
    description:
      "Car rentals save you from the worries of maintenance fee and depreciation loss. If you really don’t need a car every day and uses one on special occasions only, then, it is best for you to just rent so you will be saved from the burden of insurance fee, servicing and MOTS.",
    image:
      "https://www.eurodriveuk.com/wp-content/uploads/2018/05/keys-infront-of-rental-car-44633844.jpg",
  },
  {
    advantage: "GIVES YOU FREEDOM",
    description:
      "Car rentals save you from the worries of maintenance fee and depreciation loss. If you really don’t need a car every day and uses one on special occasions only, then, it is best for you to just rent so you will be saved from the burden of insurance fee, servicing and MOTS.",
    image:
      "https://www.eurodriveuk.com/wp-content/uploads/2018/05/Man-looking-at-view-with-car-72058346.jpg",
  },
  {
    advantage: "Comfort and convenience",
    description:
      "Modern car rentals have made the process of booking a car simple and instant. All one has to do is, select a car and make a reservation online. The rental agency may ask you to make an advance payment online, or pay a part as advance and the rest at the end of your trip.",
    image:
      "https://www.eurodriveuk.com/wp-content/uploads/2018/05/Man-looking-at-view-with-car-72058346.jpg",
  },
  {
    advantage: "High on technology",
    description:
      "Most of the rental cars come equipped with the latest accessories, like GPS and Bluetooth-enabled speakers, to enhance your driving experience. You could ask for vehicles with video screens in the back for kids. Some of the car rental services may also have a hotline ",
    image:
      "https://www.eurodriveuk.com/wp-content/uploads/2018/05/Man-looking-at-view-with-car-72058346.jpg",
  },
];

function AboutSection() {
  return (
    <>
      <section className="text-gray-600 body-font bg-slate-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium text-indigo-500 title-font mb-2">
                Rent car with EasyTrans!
              </h1>
              <div className="h-1 w-20 bg-gray-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              have not heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {rentCarAdvantages.map((advantage, index) => {
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={advantage.image}
                      alt={advantage.advantage}
                    />

                    <h2 className="text-lg text-indigo-900 font-medium title-font mb-4">
                      {advantage.advantage}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {advantage.description}
                    </p>
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

export default AboutSection;
