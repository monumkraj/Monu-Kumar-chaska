import React, { useState } from "react";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";

const tasteData = [
  {
    id: 1,
    name: "Nik Baker’s",
    location: "Connaught Place, New Delhi",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    name: "It’s Bake",
    location: "Connaught Place, New Delhi",
    image:
      "https://images.unsplash.com/photo-1565958011705-44a8e30e8321?w=400&h=400&fit=crop",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "Cakery",
    location: "Connaught Place, New Delhi",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    name: "Lazy Bear",
    location: "Connaught Place, New Delhi",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=400&fit=crop",
    bgColor: "bg-green-100",
  },
  {
    id: 5,
    name: "Bake & Shake",
    location: "Connaught Place, New Delhi",
    image:
      "https://images.unsplash.com/photo-1590080875831-9e7c76bdc9c7?w=400&h=400&fit=crop",
    bgColor: "bg-yellow-100",
  },
];

function YourTaste() {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? tasteData : tasteData.slice(0, 3);

  return (
    <section className="mt-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-[#2b3840]">Your taste</h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-700 transition"
        >
          {showAll ? "show less" : "see all"}
          {showAll ? (
            <FiChevronUp className="text-sm" />
          ) : (
            <FiChevronRight className="text-sm" />
          )}
        </button>
      </div>

      {/* Cards */}
      <div
        className={`${
          showAll ? "grid grid-cols-2 gap-4" : "flex gap-4 overflow-x-auto pb-2"
        } scrollbar-hide`}
      >
        {displayedData.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-[140px] rounded-2xl overflow-hidden shadow-sm ${item.bgColor}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-24 fit-content object-cover"
            />
            <div className="p-2">
              <h4 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YourTaste;
