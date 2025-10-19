import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faPhone,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { LayoutGrid, ArrowUpDown, SquarePlus, TrendingUp } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/6 h-screen bg-blue-100 flex flex-col justify-between p-4">
      {/* Top: Logo + Menu */}
      <div>
        <p className="text-3xl font-semibold text-teal-400 mb-8">
          Health<span className="text-blue-900">care.</span>
        </p>

        {/* General */}
        <div className="text-gray-400 text-sm">
          General
          <ul className="list-none space-y-3 mt-3">
            <li className="flex items-center gap-3 text-black">
              <MdDashboardCustomize size={20} /> Dashboard
            </li>
            <li className="flex items-center gap-3 text-black">
              <LayoutGrid size={20} /> History
            </li>
            <li className="flex items-center gap-3 text-black">
              <ArrowUpDown size={20} /> Calendar
            </li>
            <li className="flex items-center gap-3 text-black">
              <SquarePlus size={20} /> Appointments
            </li>
            <li className="flex items-center gap-3 text-black">
              <TrendingUp size={20} /> Statistics
            </li>
          </ul>
        </div>

        {/* Tool */}
        <div className="text-gray-400 text-sm mt-8">
          Tool
          <ul className="list-none space-y-3 mt-3">
            <li className="flex items-center gap-3 text-black">
              <FontAwesomeIcon icon={faCommentDots} /> Chat
            </li>
            <li className="flex items-center gap-3 text-black">
              <FontAwesomeIcon icon={faPhone} /> Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: Settings */}
      <div className="text-gray-400 text-sm">
        Settings
        <ul className="list-none space-y-3 mt-3">
          <li className="flex items-center gap-3 text-black">
            <FontAwesomeIcon icon={faGear} /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
