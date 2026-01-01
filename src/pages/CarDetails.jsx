import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const CarDetails = () => {
  const {id} = useParams();
  const [car, setCar] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${id}`)
    .then(res => res.json())
    .then(data => setCar(data))
  }, [id])
  
  const handleTryNow = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.name.value);
    toast.success("Thank you for trying the car!");
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>Car Details - RentWheels</title>
      <h1 className="text-4xl font-bold text-center mb-10">{car.name}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={car.pictureUrl}
            alt={car.name}
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </div>

        {/* Info Card */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg space-y-4">
          <p className="text-gray-600"><strong>Seller:</strong> {car.name}</p>
          <p className="text-gray-600"><strong>Email:</strong> {car.email}</p>
          <p className="text-gray-600"><strong>Price:</strong> ${car.price}</p>
          <p className="text-gray-600"><strong>Rating:</strong> {car.rating} ⭐</p>
          <p className="text-gray-600"><strong>Available Quantity:</strong> {car.availableQuantity}</p>
          <p className="mt-4 text-gray-800"><strong>Description:</strong> {car.description}</p>

          {/* Try Now Form */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4">Try This car</h2>
            <form className="flex flex-col gap-4" onSubmit={handleTryNow}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
