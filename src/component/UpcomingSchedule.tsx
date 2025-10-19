import React from "react";

interface ScheduleItem {
  day: string;
  events: { title: string; time: string; emoji: string }[];
}

const scheduleData: ScheduleItem[] = [
  {
    day: "Thursday",
    events: [
      { title: "Health checkup complete", time: "11:00 AM", emoji: "🩺" },
      { title: "Ophthalmologist", time: "14:00 PM", emoji: "👁️" },
    ],
  },
  {
    day: "Saturday",
    events: [
      { title: "Cardiologist", time: "12:00 AM", emoji: "❤️" },
      { title: "Neurologist", time: "16:00 PM", emoji: "🧠" },
    ],
  },
];

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-700 mb-3">
        The Upcoming Schedule
      </h3>
      {scheduleData.map((s, idx) => (
        <div key={idx} className="mb-4">
          <h4 className="text-sm text-gray-500 mb-2">On {s.day}</h4>
          <div className="grid grid-cols-2 gap-3">
            {s.events.map((e, i) => (
              <div
                key={i}
                className="bg-[#f1f3ff] p-3 rounded-xl text-gray-700 shadow-sm"
              >
                <h5 className="font-medium">
                  {e.title} {e.emoji}
                </h5>
                <p className="text-xs mt-1">{e.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
