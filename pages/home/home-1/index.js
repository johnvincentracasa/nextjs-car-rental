import React from "react";
import BookingCard from "../../../components/Home/Home-1/BookingCard";
import Footer from "../../../components/Home/Home-1/Footer";
import Footer2 from "../../../components/Home/Home-1/Footer2";
import Header from "../../../components/Home/Home-1/Header";
import Hero from "../../../components/Home/Home-1/Hero";
import ProductCard from "../../../components/Home/Home-1/ProductCard/ProductCard";
import ProductCard2 from "../../../components/Home/Home-1/ProductCard/ProductCard2";

function index() {
  return (
    <>
      <Header />
      <Hero />
      <div className=" flex flex-row flex-wrap gap-2 max-w-screen-xl mx-auto mb-10">
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </div>

      {/* <BookingCard/> */}
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
}

export default index;
