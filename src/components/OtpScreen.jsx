import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile;

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      navigate("/restaurants");
    } else {
      alert("Invalid OTP ❌");
    }
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-4">
      <img
        src="/back.svg"
        alt="Back"
        className="absolute mt-12 top-4 left-4 cursor-pointer"
        onClick={handleBack}
      />
      <div className="flex flex-col justify-center h-[30vw] w-[70vw] items-center bg-gray-50 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="items-start text-start w-full mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            OTP Verification
          </h1>
          <p className="text-gray-500 mb-6 text-left text-[18px]">
            Enter the verification code we just sent on your Mobile Number.
          </p>
        </div>

        {/* OTP Boxes */}
        <div className="flex justify-between w-full mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-10 h-12 sm:w-12 sm:h-14 border border-gray-300 rounded-md text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-red-400 text-white font-semibold py-3 h-[56px] rounded-md hover:bg-red-500 transition"
        >
          Verify
        </button>

        <p className="mt-4 text-gray-500 text-sm">
          Didn’t receive code?{" "}
          <button className="text-blue-600 font-semibold hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}

export default OtpScreen;
