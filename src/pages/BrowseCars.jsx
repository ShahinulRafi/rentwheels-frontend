import React, { useEffect, useState } from "react";
import CarCard from "../components/FeaturedCars/CarCard";
const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, ""); // remove trailing slash;

const BrowseCars = () => {
  const [popular, setPopular] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, [category]);

  return (
    <div className="flex flex-col items-center my-10">
      <title>All Cars - RentWheels</title>
      <h2 className="text-3xl font-bold text-center my-8">
        Browse Different Cars
      </h2>
      <div className="flex justify-between gap-5 items-center mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
        onChange={(e) => setCategory(e.target.value)}
          name="category"
          required
          className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select category</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Hatchback</option>
          <option>Luxury</option>
          <option>Electric</option>
        </select>
      </div>
      <div className="bg-amber-50 p-5 md:p-10 rounded-xl lg:mx-20">
        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {popular.map((car) => (
            <CarCard key={car.carId} car={car}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCars;
