import React, { useContext, useEffect, useState } from "react";
import CarCard from "../components/FeaturedCars/CarCard";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, ""); // remove trailing slash;

const MyListing = () => {
  const [myListing, setMyListing] = useState([]);
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if(!user?.email) return;
    fetch(`${BASE_URL}/myListings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyListing(data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  useEffect(() => {
    // fetch(`http://localhost:5000/bookingscheck`)
    // .then(res => res.json())
    // .then(data => setBooking(data))
    // .catch(err => console.error(err));

    const fetchBookings = async() => {
      try{
        const {data} = await axios.get(`${BASE_URL}/bookingscheck`);
        setBooking(data);
      }
      catch(err){
        console.error(err);
      }
    };

    fetchBookings();
  }, [])

  console.log(myListing);

  const handleDelete = (id ) => {
    axios.delete(`${BASE_URL}/delete/${id}`)
    .then(res => {
      //update UI
      const remaining = myListing.filter(booking => booking._id !== id);
      setMyListing(remaining);
      console.log(res.data);
    })
    .catch(err => console.error(err));
  }
  return (
    <div className="flex flex-col items-center my-10 md:mx-20">
      <title>My Bookings</title>
      <h2 className="text-3xl font-bold text-center my-8">My Cars</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Category</th>
              <th>Rent Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myListing.map((car) => (
              <tr>
               
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={car?.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{car?.name}</div>
                      {/* <div className="text-sm opacity-50">{car?.location}</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {car?.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {car?.description}
                  </span>
                </td>
                <td>{car?.price}</td>
                <td>
                  {
                    booking?.some(b => b.productId === car._id) ? (
                      <span className="badge badge-success badge-sm">Booked</span>
                    ) : (
                      <span className="badge badge-warning badge-sm">Available</span>
                    )
                  }
                </td>
                <td className="flex items-center mt-3 gap-3">
                  <Link to={`/updateBookings/${car?._id}`}><button className="btn btn-primary btn-xs">Edit</button></Link>
                  <button onClick={() => handleDelete(car?._id)} className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:px-10 justify-items-center">
        {myBookings.map((car) => (
          <CarCard key={car.carId} car={car} />
        ))}
      </div> */}
    </div>
  );
};

export default MyListing;
