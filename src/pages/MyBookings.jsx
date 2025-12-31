import React from "react";
import CarCard from "../components/FeaturedCars/CarCard";

const MyBookings = () => {
  const demoCars = [
  {
    carId: 1,
    carName: "Rainbow Hatchback",
    sellerName: "Demo Dealer",
    price: 19999,
    rating: 4.2,
    availableQuantity: 5,
    description: "Compact hatchback with vibrant colors, perfect for city driving.",
    pictureURL: "https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg",
    subCategory: "Hatchback",
  },
  {
    carId: 2,
    carName: "Cuddly SUV",
    sellerName: "Demo Dealer",
    price: 24500,
    rating: 4.5,
    availableQuantity: 3,
    description: "Comfortable SUV for family trips with plush interior.",
    pictureURL: "https://media.istockphoto.com/id/167154546/photo/cute-teddy-bear-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=ecZbvDgOAg4T624CWRcgHxoOcTJ3IL8nia_vGBcWpjc=",
    subCategory: "SUV",
  },
  {
    carId: 3,
    carName: "Mini Electric Train Car",
    sellerName: "Demo Dealer",
    price: 29999,
    rating: 4.6,
    availableQuantity: 2,
    description: "Compact electric vehicle with futuristic design.",
    pictureURL: "https://img.freepik.com/free-vector/wood-toy-train_24877-81937.jpg?t=st=1761380216~exp=1761383816~hmac=5cf9eced61ee096a06ff8546fc60189a529fc5f0dc4ea9d9cc69262d592dfb02&w=1480",
    subCategory: "Electric",
  },
  {
    carId: 4,
    carName: "Creative Sedan",
    sellerName: "Demo Dealer",
    price: 15999,
    rating: 4.1,
    availableQuantity: 4,
    description: "Sedan with customizable features and stylish design.",
    pictureURL: "https://images.pexels.com/photos/20021300/pexels-photo-20021300.jpeg",
    subCategory: "Sedan",
  },
  {
    carId: 5,
    carName: "Demo Luxury Coupe",
    sellerName: "Demo Dealer",
    price: 49999,
    rating: 4.7,
    availableQuantity: 1,
    description: "Luxury coupe with premium interior and sleek look.",
    pictureURL: "https://images.pexels.com/photos/46178/teddy-bear-bear-children-toys-forest-46178.jpeg",
    subCategory: "Luxury",
  },
];


  return (
    <div className="flex flex-col items-center my-10 md:mx-20">
        <title>My Bookings</title>
      <h2 className="text-3xl font-bold text-center my-8">My Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:px-10 justify-items-center">
        {demoCars.map((car) => (
          <CarCard key={car.carId} car={car} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
