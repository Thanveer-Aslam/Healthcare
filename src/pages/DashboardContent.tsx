import React from "react";
import Human from "../assets/image.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import ActivityChart from "../component/ActivityChart";
import Calendar from "../component/Calendar";
import AppointmentCard from "../component/AppointmentCard";
import UpcomingSchedule from "../component/UpcomingSchedule";
// import { BarChart } from "@mui/x-charts/BarChart";

const DashboardContent: React.FC = () => {
  return (
    <div className="flex gap-6 bg-gray-50 h-full">
      {/* Left Column */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Top Section: Body + Health Cards */}
        <div className="flex gap-6">
          {/* Human Body */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
            <FaMagnifyingGlassPlus className="relative " />
            <div className="flex justify-center relative">
              <img
                src={Human} // replace with your image path
                alt="Human body"
                className="w-[200px]"
              />
              {/* Example floating labels */}

              <div className="absolute top-16 left-[60%] bg-blue-600 text-white text-xs px-3 py-1 rounded-md shadow">
                ❤️ Healthy Heart
              </div>
              <div className="absolute bottom-11 left-[10%] bg-cyan-400 text-white text-xs px-3 py-1 rounded-md shadow">
                🦵 Healthy Leg
              </div>
            </div>
          </div>

          {/* Health Cards */}
          <div className="w-[25%] flex flex-col gap-4">
            {[
              {
                emoji: "🫁",
                label: "Lungs",
                color: "bg-red-400",
                progress: "w-3/4",
              },
              {
                emoji: "🦷",
                label: "Teeth",
                color: "bg-green-400",
                progress: "w-full",
              },
              {
                emoji: "🦴",
                label: "Bone",
                color: "bg-red-400",
                progress: "w-2/4",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-2"
              >
                <h3 className="text-gray-700 font-semibold text-sm">
                  <span className="text-lg">{item.emoji}</span> {item.label}
                </h3>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 ${item.color} rounded-full ${item.progress}`}
                  />
                </div>
                <p className="text-[10px] text-gray-400">Date: 26 Oct 2021</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {/* <div className="flex justify-between mb-4">
            <h3 className="text-gray-800 font-semibold">Activity</h3>
            <p className="text-gray-400 text-sm">3 appointments this week</p>
          </div> */}
          <ActivityChart />

          {/* Fake graph bars */}
          {/* <BarChart
            xAxis={[{ data: ["group A"] }]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            height={100}
          /> */}
        </div>
      </div>

      {/* Right Column: Calendar + Schedule */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Calendar Section
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-gray-800 font-semibold mb-4">October 2021</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`py-1 rounded-md ${
                  i === 25 ? "bg-blue-500 text-white" : "text-gray-600"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div> */}
        <Calendar />
        <div className="flex gap-4">
          <AppointmentCard
            title="Dentist"
            time="09:00–11:00"
            doctor="Dr. Cameron Williamson"
            emoji="🦷"
          />
          <AppointmentCard
            title="Physiotherapy Appointment"
            time="11:00–12:00"
            doctor="Dr. Kevin Djones"
            emoji="💪"
          />
        </div>
        <UpcomingSchedule />
        {/* Upcoming Schedule */}
        {/* <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-gray-800 font-semibold mb-3">
            The Upcoming Schedule
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl">
              <span className="text-gray-800 text-sm font-medium">
                Health checkup complete
              </span>
              <span className="text-gray-500 text-xs">11:00 AM</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl">
              <span className="text-gray-800 text-sm font-medium">
                Ophthalmologist
              </span>
              <span className="text-gray-500 text-xs">14:00 PM</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl">
              <span className="text-gray-800 text-sm font-medium">
                Cardiologist
              </span>
              <span className="text-gray-500 text-xs">12:00 AM</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-xl">
              <span className="text-gray-800 text-sm font-medium">
                Neurologist
              </span>
              <span className="text-gray-500 text-xs">16:00 PM</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardContent;
