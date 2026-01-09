import React from "react";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div className="flex flex-col m-10 items-center justify-between mx-auto">
      <div className="">
        <h2 className="mx-10 text-3xl font-semibold text-center">
          Welcome to RentWheels!
        </h2>
        <p className="mx-10 text-gray-600">
          Let it be your car dreams, or your inner adventurer, experience the
          thrill of hitting the road with RentWheels!
        </p>
        <div className="flex justify-center m-10">
          <button className="btn btn-secondary">
            <Link to="/browsecars">Browse Cars</Link>
          </button>
        </div>
      </div>
      <div className="md:mx-20 mx-10">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/490611277/photo/my-own-car-design.jpg?s=2048x2048&w=is&k=20&c=_0BBsID88CN9Bj3Q5fYLpZ9t_ZNVvz3Op1I7wCqu4aI="
              className="w-64 h-80"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/490611299/photo/my-own-car-design.jpg?s=2048x2048&w=is&k=20&c=7G4uGAxesJsBvjYYhWi9N9qRd2x_fXKlUHJ21le5bwQ="
              className="w-64 h-80"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1285466753/photo/gray-sportscar-front-view-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=ZNH2pW1GExbmWhMjQBrgm5_A7eyvRYqOA1m1wkB5nv0="
              alt="Burger"
              className="w-64 h-80"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1297761575/photo/black-sportscar-front-view-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=0qipGKmTpepCKkG5jsl32y3_WIW0BarmSNz_LpG1w8Y="
              className="w-64 h-80"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1286476807/photo/gray-sportscar-side-view-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=YRnb5S6xfe_nJEntH7w7nRzDOXvHmJpiFFhYeEDlgIo="
              className="w-64 h-80"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1191941530/photo/black-modern-car-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=jOvP5eKDrJTNVgPVB9xyeRP_80GCebhg3NKA8XSwmPU="
              className="w-64 h-80"
              alt="Burger"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/490611277/photo/my-own-car-design.jpg?s=2048x2048&w=is&k=20&c=_0BBsID88CN9Bj3Q5fYLpZ9t_ZNVvz3Op1I7wCqu4aI="
              alt="Burger"
              className="w-64 h-80"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1297761575/photo/black-sportscar-front-view-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=0qipGKmTpepCKkG5jsl32y3_WIW0BarmSNz_LpG1w8Y="
              alt="Burger"
              className="w-64 h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
