import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateBookings = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [booking, setBooking] = useState();
  console.log(id);
  const [category, setCategory] = useState(booking?.category);
  const navigation = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/myBookings/${id}`).then((res) => {
      setBooking(res.data); // asios e data property te response thake
      setCategory(res.data.category);
    });
  }, [id]);

  // useEffect(() => {
  // axios
  //   .get(`http://localhost:5000/myBookings/${id}`)
  //   .then((res) => setBooking(res.data)); // asios e data property te response thake
  //     if(booking?.category){
  //         setCategory(booking?.category);
  //     }
  // }, [id, booking?.category]);

  console.log(booking);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      imageUrl,
      description,
      email,
    };

    axios
      .put(`http://localhost:5000/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigation("/myBookings");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Car</h2>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Car Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Name
            </label>
            <input
              defaultValue={booking?.name}
              type="text"
              name="name"
              required
              placeholder="Toyota Corolla"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
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

          {/* Rent Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rent Price (per day)
            </label>
            <input
              defaultValue={booking?.price}
              type="number"
              name="price"
              required
              placeholder="৳ 3000"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              defaultValue={booking?.location}
              type="text"
              name="location"
              required
              placeholder="Dhaka, Bangladesh"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hosted Image URL
            </label>
            <input
              defaultValue={booking?.imageUrl}
              type="url"
              name="imageUrl"
              required
              placeholder="https://images.unsplash.com/..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              defaultValue={booking?.description}
              rows="4"
              name="description"
              required
              placeholder="Comfortable, fuel-efficient, perfect for city rides..."
              className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Provider Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Provider Name
            </label>
            <input
              type="text"
              name="providerName"
              value={user?.displayName}
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Provider Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Provider Email
            </label>
            <input
              value={user?.email}
              type="email"
              name="email"
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookings;
