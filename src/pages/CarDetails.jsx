import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
// import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  console.log("car id", id);
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    fetch(`${BASE_URL}/myBookings/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  // const handleTryNow = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.email.value, e.target.name.value);
  //   toast.success("Thank you for trying the car!");
  // };

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const renterName = form.renterName.value;
    const renterEmail = form.renterEmail.value;
    const renterPhone = form.renterPhone.value;
    // const carName = form.carName.value;

    // const price = form.price.value;

    const booking = {
      productId: id,
      renterName,
      renterEmail,
      renterPhone,
      carName: car.name,
      price: car.price,
      date: new Date(),
    };

    console.log("current booking", booking);

    try {
      const { data } = await axios.post(
        `${BASE_URL}/bookings`,
        booking
      );
      if (data.success) {
        setCar(data);
        toast.success(data.message); // Booking succeeded
      } else {
        toast.error(data.message); // Just in case
      }
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error(err.response.data.message); // Car already booked
      } else {
        toast.error("Something went wrong. Try again.");
      }
    }

    // try {
    //   const { data: existingBooking } = await axios.get(
    //     `http://localhost:5000/bookings?id=${id}`
    //   );

    //   if (existingBooking.length > 0) {
    //     return toast.error("This car is already booked.");
    //   }

    //   axios
    //     .post("http://localhost:5000/bookings", booking)
    //     .then((res) => {
    //       console.log(res.data);
    //       toast.success("Car booked successfully!");
    //     })
    //     .catch((err) => console.error(err));
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>Car Details - RentWheels</title>
      <h1 className="text-4xl font-bold text-center mb-10">{car.name}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={car.imageUrl}
            alt={car.name}
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </div>

        {/* Info Card */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg space-y-4">
          <p className="text-gray-600">
            <strong>Renter Name:</strong> {car.providerName}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {car.email}
          </p>
          <p className="text-gray-600">
            <strong>Model:</strong> {car.category}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {car.location}
          </p>
          <p className="text-gray-600">
            <strong>Price:</strong> ${car.price}
          </p>
          
          <p className="mt-4 text-gray-800">
            <strong>Description:</strong> {car.description}
          </p>

          {/* Try Now Form */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
            {/* <form className="flex flex-col gap-4" onSubmit={handleTryNow}>
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
            </form> */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-secondary w-full"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <form
                  onSubmit={handleBooking}
                  className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4"
                >
                  <legend className="fieldset-legend">Order Details</legend>
                  <label className="label">Car Name</label>
                  <input
                    name="carName"
                    defaultValue={car?.name}
                    readOnly
                    type="text"
                    className="input"
                    placeholder="Car Name"
                  />

                  <label className="label">Renter Name</label>
                  <input
                    name="renterName"
                    defaultValue={user.displayName}
                    type="text"
                    className="input"
                    placeholder="Renter Name"
                  />

                  <label className="label">Renter Email</label>
                  <input
                    name="renterEmail"
                    defaultValue={user?.email}
                    readOnly
                    type="email"
                    className="input"
                    placeholder="Email"
                  />

                  <label className="label">Price</label>
                  <input
                    name="price"
                    defaultValue={car.price}
                    readOnly
                    type="number"
                    className="input"
                    placeholder="Price"
                  />

                  <label className="label">Phone</label>
                  <input
                    name="renterPhone"
                    type="text"
                    className="input"
                    placeholder="Phone Number"
                  />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                {/* <h3 className="font-bold text-lg">Rent this car</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p> */}
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
