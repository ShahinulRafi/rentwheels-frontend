import React, { use } from "react";
import Nav from "../components/Header/Nav";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import { AuthContext } from "../contexts/AuthContext";
import Marketing from "../components/Marketing.jsx/Marketing";
import Testimonial from "../components/Testimonial/Testimonial";
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import WhyRentWithUs from "../components/WhyRentWithUs/WhyRentWithUs";
import TopCars from "../components/TopCars/TopCars";

const Home = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div>
      <title>RentWheels - Car Rental Platform</title>
      <main>
        <section>
          <Slider></Slider>
        </section>
        <section>
          <FeaturedCars></FeaturedCars>
        </section>
        {/* <Outlet></Outlet> */}
        <section>
          {/* <Marketing></Marketing> */}
          <WhyRentWithUs></WhyRentWithUs>
        </section>
        <section>
          <TopCars></TopCars>
        </section>
        <section>
          <Testimonial>s</Testimonial>
        </section>
      </main>
    </div>
  );
};

export default Home;
