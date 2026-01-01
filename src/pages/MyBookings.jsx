import React, { useContext, useEffect, useState } from "react";
import CarCard from "../components/FeaturedCars/CarCard";
import { AuthContext } from "../contexts/AuthContext";

const MyBookings = () => {

  const [myBookings, setMyBookings] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setMyBookings(data))
    .catch(err => console.error(err));
  }, [user?.email]);

  console.log(myBookings);
  return (
    <div className="flex flex-col items-center my-10 md:mx-20">
      <title>My Bookings</title>
      <h2 className="text-3xl font-bold text-center my-8">My Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:px-10 justify-items-center">
        {myBookings.map((car) => (
          <CarCard key={car.carId} car={car} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
