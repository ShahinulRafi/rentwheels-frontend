import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkBooking = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/bookingscheck?id=${car._id}`
        );
        setIsBooked(data.length > 0);
      } catch (error) {
        console.error("Error checking booking status", error);
        setIsBooked(false);
      } finally {
        setLoading(false);
      }
    };
    checkBooking();
  }, [car._id]);

  return (
    <div>
      <div className="card bg-base-100 w-84 md:w-96 h-96 shadow-sm">
        <figure>
          <img src={car.imageUrl} alt={car.name} className="w-full h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {car.name}
            <div className="badge flex items-center gap-1">
              
              <div>
                {loading ? (
                  <span>Checking...</span>
                ) : isBooked ? (
                  <span className="badge badge-secondary">Booked</span>
                ) : (
                  <span className="badge badge-primary">Available</span>
                )}
              </div>
            </div>
          </h2>
          <h2 className="font-semibold">{car.category}</h2>
          <p>{car.description}</p>
          <div className="card-actions ">
            <div className="badge badge-outline">
              Provider - {car.providerName}
            </div>
            <div className="badge badge-outline">Price - ${car.price}</div>
            <button className="btn badge badge-outline">
              <Link to={`/cardetails/${car._id}`}>View More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
