import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#006a4e] text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"></path></svg>
            <span className="text-lg font-semibold">Sign up To Our Newsletters</span>
          </div>
          <span>...and receive $20 coupon for first shopping</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email Address..."
              className="py-4 px-6 rounded-full w-full md:w-96"
            />
            <button className="absolute top-2  right-2   text-white px-4 py-2 rounded-full bg-[#006a4e]">
              Subscribe!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
