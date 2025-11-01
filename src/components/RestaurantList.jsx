import React, { useEffect, useState, useRef } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import YourTaste from "./YourTaste";

function RestaurantList() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [popular, setPopular] = useState([]);
  const slideRef = useRef(null);

  const CARDS = [
    {
      id: 1,
      title: "Veggie Friendly Eateries",
      description: "Explore the best vegetarian options in town.",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Chef's Specials",
      Discription: "Handpicked dishes curated by top chefs.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Healthy Picks",
      description: "Delicious and nutritious meals for a healthy lifestyle.",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      },
     {
      id: 4,
      title: "Veggie Friendly Eateries",
      description: "Explore the best vegetarian options in town.",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
  },
];

  // 🧠 Fetch nearby restaurant data (Dummy API)
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=4");
        const data = await res.json();
        const formatted = data.recipes.map((item, index) => ({
          id: item.id,
          name: item.name,
          category: item.cuisine || "Various",
          location: "Connaught Place, New Delhi",
          rating: (Math.random() * (5 - 4) + 4).toFixed(1),
          cost: Math.floor(Math.random() * 300 + 100),
          image: item.image,
        }));
        setPopular(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchRestaurants();
  }, []);

  const handleFoodClick = (food) => {
    navigate(`/restaurant/${food.id}`, { state: food });
  };

  // Auto-slide effect
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${activeSlide * 100}%)`;
    }
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[#f7f8fb] flex justify-center">
      <div className="w-full max-w-sm">
        {/* Navbar */}
        <div className="Navbar justify-center left-0 w-full max-w-sm bg-white shadow-md flex items-center px-4 py-3">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                Pre Order From
              </h1>
              <FiUser className="text-gray-700 text-xl" />
            </div>
            <h2 className="text-base font-bold text-gray-600 mt-1">
              Connaught Place,
            </h2>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="flex justify-center gap-4 mt-3">
          <div className="h-[200px] w-[200px] p-3 bg-zinc-100 text-start rounded-md">
            <div className="mt-12">
              <h1 className="text-3xl font-bold text-gray-400">Karan</h1>
              <h2 className="text-lg font-bold text-gray-600">
                Let's Explore this evening
              </h2>
            </div>
          </div>

          <div className="h-[200px] w-[200px] rounded-md flex flex-col items-center justify-center p-3">
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex flex-col items-center me-5">
                <img
                  src="/offers.png"
                  alt="Offers"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-gray-600 font-semibold mt-1">Offers</span>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/wallet.png"
                  alt="Wallet"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-gray-600 font-semibold mt-1">Wallet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Taste Section */}
        <div className="mt-6 px-4">
          <YourTaste />
        </div>

        {/* Carousel Section */}
        <section className="px-4 mt-4">
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                ref={slideRef}
                style={{ width: `${CARDS.length * 100}%` }}
              >
                {CARDS.map((card) => (
                  <div key={card.id} className="w-full flex-shrink-0 p-0">
                    <div className="h-40 rounded-2xl  text-[36px] text-[#505259] overflow-hidden relative">
                      <img
                        src={card.image}
                        alt={card.title}

                        className="w-full h-full object-cover content-fit"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {CARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === activeSlide ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Popular Section */}
          <h3 className="mt-6 text-lg font-semibold text-[#2b3840]">
            Popular Ones
          </h3>

          <div className="mt-3 space-y-4 pb-8">
            {popular.map((p) => (
              <div
                key={p.id}
                onClick={() => handleFoodClick(p)}
                className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm items-start cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {p.name}
                      </div>
                      <div className="text-xs text-gray-400">{p.category}</div>
                      <div className="text-xs text-gray-400">{p.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">₹ {p.cost}</div>
                      <div className="text-xs text-gray-400">Cost for two</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-orange-500 text-xs">
                        🔥 4 Offers trending
                      </div>
                      <div className="text-xs text-gray-500">⭐ {p.rating}</div>
                    </div>
                    <div className="text-xs text-gray-400">Popularity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default RestaurantList;
