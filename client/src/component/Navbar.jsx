import React from "react";


const Navbar = () => {
  return (
    <div className="fixed w-full h-23 py-3 z-2">
      {/* Navbar main container */}

      {/* Hospital logo */}
      <div className="font-bold ml-14 mt-5 text-2xl">
        <p>Hospital</p>
      </div>

      {/* Navbar grey container */}
      <div
        className="hidden sm:flex fixed h-14 justify-between items-center gap-16 py-3 px-10 sm:left-1/2 -translate-x-1/2 top-[20px] rounded-full bg-black/60 text-center text-white shadow-lg z-10"
      >
        <ul className="flex gap-8 text-xl">
          <li>About us</li>
          <li>Partner with us</li>
          <li>Join the team</li>
          <li>News</li>
        </ul>

        <button className="h-10 bg-gradient-to-r from-[#2980b9] via-[#6dd5fa] to-green-500 text-white rounded-full px-5 py-2 font-bold">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;