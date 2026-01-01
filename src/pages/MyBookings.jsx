import React, { useContext, useEffect, useState } from "react";
import CarCard from "../components/FeaturedCars/CarCard";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import axios from "axios";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  console.log(myBookings);

  const handleDelete = (id ) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
    .then(res => {
      //update UI
      const remaining = myBookings.filter(booking => booking._id !== id);
      setMyBookings(remaining);
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
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myBookings.map((car) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={car?.imageURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{car?.displayName}</div>
                      <div className="text-sm opacity-50">{car?.location}</div>
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
                <td className="flex gap-3">
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

export default MyBookings;
