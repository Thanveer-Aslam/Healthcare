import React from "react";
import { FaMagnifyingGlass, FaCircleUser, FaSquarePlus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 bg-white shadow-sm">
      <div className="w-full">
        {/* Search Bar */}
        <div className="relative w-1/2 flex justify-between">
          <FaMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <FaBell className="absolute right-3 top-3 text-gray-500 cursor-pointer hover:text-blue-500" />
        </div>
      </div>
      <div className="">
        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* <FaBell className="text-gray-950 text-xl cursor-pointer hover:text-blue-500" /> */}
          <FaCircleUser className="text-2xl cursor-pointer" />
          <FaSquarePlus className="text-2xl" />
          {/* <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer">
          <img
            src="https://avatars.dicebear.com/api/avataaars/example.svg"
            alt="Profile"
            className="w-9 h-9 rounded-full"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
