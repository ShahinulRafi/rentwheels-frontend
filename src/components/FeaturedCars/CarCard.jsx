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
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-52"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {car.name}
              <div className="badge badge-secondary flex items-center gap-1">
                <div>
                  <AiFillStar className="text-yellow-400"/>
                </div>
                <div>{car.category}</div>
              </div>
            </h2>
            <p>{car.description}</p>
            <div className="card-actions ">
              
              <div className="badge badge-outline">
                Provider Name - {car.providerName}
              </div>
              <div className="badge badge-outline">Price - ${car.price}</div>
              <button className="btn badge badge-outline"><Link to={`/cardetails/${car._id}`}>View More</Link></button>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default CarCard;
