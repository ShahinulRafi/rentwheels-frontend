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
              src="https://images.unsplash.com/photo-1614850524473-94c2b89c0b95?auto=format&fit=crop&w=800&q=80"
              alt="Toyota Corolla"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Toyota Corolla</h3>
              <p className="text-gray-600 mb-2">Sedan</p>
              <p className="text-indigo-600 font-bold">৳ 3000/day</p>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1611926781103-cb4a83924ad6?auto=format&fit=crop&w=800&q=80"
              alt="Honda Civic"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Honda Civic</h3>
              <p className="text-gray-600 mb-2">Sedan</p>
              <p className="text-indigo-600 font-bold">৳ 3500/day</p>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1598878773491-6f99df947a41?auto=format&fit=crop&w=800&q=80"
              alt="Tesla Model 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Tesla Model 3</h3>
              <p className="text-gray-600 mb-2">Electric</p>
              <p className="text-indigo-600 font-bold">৳ 8000/day</p>
            </div>
          </div>

          {/* Car Card 4 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1593947640122-0d3c7d56c7aa?auto=format&fit=crop&w=800&q=80"
              alt="BMW X5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">BMW X5</h3>
              <p className="text-gray-600 mb-2">SUV</p>
              <p className="text-indigo-600 font-bold">৳ 9000/day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCars;
