import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-600">
        No Restaurant Data Found
      </div>
    );
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: data.name,
          text: `Check out ${data.name} on Fastor!`,
          url: window.location.href,
        });
      } else {
        alert("Sharing not supported in this browser.");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-sm mx-auto shadow-md rounded-md overflow-hidden">
      {/* Top Half - Image Section */}
      <div className="relative w-full">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 bg-white/80 text-gray-800 px-2 py-1 rounded-lg hover:bg-white flex items-center gap-2 z-10"
        >
          <img src="/back(1).svg" alt="Back" className="w-5 h-5" />
        </button>

        {/* Responsive Image */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-[50vh] sm:h-[45vh] object-cover"
        />

        {/* Fastor logo overlay */}
        <img
          src="/fastor-logo.png"
          alt="Fastor Logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 opacity-80"
        />
      </div>

      {/* Bottom Half - Text Section */}
      <div className="flex flex-col justify-start px-5 py-6 text-black rounded-t-3xl shadow-inner bg-white mt-[-30px] sm:mt-[-50px] z-20 relative">
        {/* Name + Rating */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
          <p className="text-base sm:text-lg font-semibold">⭐ {data.rating}</p>
        </div>

        {/* Location */}
        <p className="text-lg sm:text-xl text-gray-700 mb-2">
          {data.location}
        </p>

        {/* Offer Section */}
        <div className="flex items-center gap-3 text-[#D39171] mb-3">
          <img src="/Vector.svg" alt="" className="h-5 w-5" />
          <p className="text-sm sm:text-base">4 Offers Trending</p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-[16px] text-gray-600 leading-relaxed">
          {data.description
            ? data.description
            : "Experience delicious food and a cozy atmosphere at one of the best-rated restaurants in Connaught Place."}
        </p>

        {/* Cost Info */}
        <p className="text-md text-gray-800 mt-3 font-medium">
          ₹{data.cost} for two
        </p>
      </div>
    </div>
  );
}

export default RestaurantDetail;
