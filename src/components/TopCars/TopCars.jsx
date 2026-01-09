import React from "react";

const TopCars = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Top Rated Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Car Card 1 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww"
              alt="Toyota Corolla"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Toyota Corolla</h3>
              <p className="text-gray-600 mb-2">Sedan</p>
              <p className="text-indigo-600 font-bold">$ 3000/day</p>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1628519592419-bf288f08cef5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww"
              alt="Honda Civic"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Honda Civic</h3>
              <p className="text-gray-600 mb-2">Sedan</p>
              <p className="text-indigo-600 font-bold">$ 3500/day</p>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1541348263662-e068662d82af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww"
              alt="Tesla Model 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Tesla Model 3</h3>
              <p className="text-gray-600 mb-2">Electric</p>
              <p className="text-indigo-600 font-bold">$ 8000/day</p>
            </div>
          </div>

          {/* Car Card 4 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1506610654-064fbba4780c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="BMW X5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">BMW X5</h3>
              <p className="text-gray-600 mb-2">SUV</p>
              <p className="text-indigo-600 font-bold">$ 9000/day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCars;
