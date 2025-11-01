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
    <div className="min-h-screen bg-w flex flex-col max-w-sm justify-center mx-auto shadow-md rounded-md overflow-hidden">
      {/*  Top Half - Image Section */}
      <div className="relative w-full">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/70 text-gray-800 px-3 py-1 rounded-lg hover:bg-white flex items-center gap-2"
        >
          <img src="/back(1).svg" alt="" />
        </button>

        <img
          src={data.image}
          alt={data.name}
          className="w-full h-[30vw] object-cover"
        />

        {/* Fastor logo overlay */}
        <img
          src="/fastor-logo.png"
          alt="Fastor Logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-80"
        />
      </div>

      {/* 🧾 Bottom Half - Text Section */}

      <div className="h-1/2 relative flex flex-col justify-center px-6 p-5 mt-[-50px] text-black rounded-t-3xl shadow-inner  bg-white">
        {/* Name + Rating */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-lg font-semibold">⭐ {data.rating}</p>
        </div>

        {/* Location */}
        <p className="text-[27px] text-gray-700 mb-2">{data.location}</p>
        <div className="flex gap-4  text-[#D39171]">
          <img src="/Vector.svg" alt="" className="h-[20px] w-[20px]" />
          <p>4 Offers Trending</p>
        </div>
        {/* Description */}
        <p className="text-sm text-[16px] mt-[20px] text-gray-600 leading-relaxed">
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
