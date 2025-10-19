import React from "react";

interface CalendarDay {
  day: string;
  date: number;
  appointments?: { time: string; title: string; color: string }[];
}

const calendarData: CalendarDay[] = [
  { day: "Mon", date: 25 },
  {
    day: "Tues",
    date: 26,
    appointments: [{ time: "09:00", title: "Dentist", color: "bg-indigo-500" }],
  },
  {
    day: "Wed",
    date: 27,
    appointments: [
      { time: "11:00", title: "Physiotherapy", color: "bg-sky-400" },
    ],
  },
  { day: "Thurs", date: 28 },
  { day: "Fri", date: 29 },
  {
    day: "Sat",
    date: 30,
    appointments: [{ time: "12:00", title: "Checkup", color: "bg-indigo-300" }],
  },
  { day: "Sun", date: 31 },
];

const Calendar: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold">October 2021</h2>
        <div className="space-x-2 text-gray-500">
          <button>◀</button>
          <button>▶</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center">
        {calendarData.map((day, index) => (
          <div
            key={index}
            className="bg-[#f7f8fd] rounded-xl p-3 flex flex-col items-center text-sm"
          >
            <p className="text-gray-400">{day.day}</p>
            <p className="font-semibold text-gray-700">{day.date}</p>
            <div className="mt-2 space-y-1">
              {day.appointments?.map((a, i) => (
                <div
                  key={i}
                  className={`${a.color} text-white text-xs px-3 py-1 rounded-lg`}
                >
                  {a.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
