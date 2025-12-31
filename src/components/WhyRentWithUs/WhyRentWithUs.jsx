import React from "react";

const WhyRentWithUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Rent With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Easy Booking */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-indigo-600 mb-4 text-4xl">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Reserve your perfect ride in just a few clicks – simple, fast, and
              hassle-free.
            </p>
          </div>

          {/* Card 2: Affordable Rates */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-indigo-600 mb-4 text-4xl">💰</div>
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p className="text-gray-600">
              Enjoy competitive pricing for every car, whether for a day trip or
              a week-long adventure.
            </p>
          </div>

          {/* Card 3: Trusted Providers */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-indigo-600 mb-4 text-4xl">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Providers</h3>
            <p className="text-gray-600">
              All cars come from verified and reliable providers, giving you
              peace of mind on the road.
            </p>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="text-indigo-600 mb-4 text-4xl">📞</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our friendly support team is available around the clock to assist
              you with any query or issue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRentWithUs;
