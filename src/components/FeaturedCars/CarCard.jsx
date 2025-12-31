import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  return (
    <div>
      <div className="card bg-base-100 w-84 md:w-96 h-96 shadow-sm">
          <figure>
            <img
              src={car.pictureURL}
              alt={car.carName}
              className="w-full h-52"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {car.carName}
              <div className="badge badge-secondary flex items-center gap-1">
                <div>
                  <AiFillStar className="text-yellow-400"/>
                </div>
                <div>{car.rating}</div>
              </div>
            </h2>
            <p>{car.description}</p>
            <div className="card-actions ">
              
              <div className="badge badge-outline">
                Stock - {car.availableQuantity}
              </div>
              <div className="badge badge-outline">Price - ${car.pricePerDay}</div>
              <button className="btn badge badge-outline"><Link to={`/cardetails/${car.carId}`}>View More</Link></button>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default CarCard;
