import React, { useEffect, useState } from "react";

import { Link } from "react-router";
import CarCard from "./CarCard";

const FeaturedCars = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featured")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  return (
    <div className="my-10 bg-amber-50 md:bg-none flex flex-col items-center">
      <div className="md:bg-amber-50 md:mx-20 rounded-xl md:p-10 py-10">
        <h2 className="text-3xl font-semibold text-center mt-8">
          Featured Cars
        </h2>
        <p className=" text-center mb-8 mt-2 text-gray-600">
          Check out our popular cars!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {popular.map((car) => (
            <CarCard key={popular.carId} car={car}></CarCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link className="text-center items-center" to="/allCars">
            <button className="btn btn-secondary">All Cars</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
