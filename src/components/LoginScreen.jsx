import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (mobile.length === 10) {
      navigate("/otp", { state: { mobile } });
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="h-screen w-full bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-gray-50 shadow-lg rounded-2xl p-8 h-[60%] w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-black mb-2">
          Enter Your Mobile Number
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          We will send you a 4-digit verification code
        </p>

        <input
          className="w-full px-4 py-2 border border-gray-300 h-[56px] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button
          onClick={handleSendCode}
          className="mt-6 w-full bg-red-300 rounded-md text-white py-2 h-[56px] hover:bg-red-400 transition"
        >
          Send Code
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
