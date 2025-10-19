import React from "react";

interface AppointmentCardProps {
  title: string;
  time: string;
  doctor: string;
  emoji: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  time,
  doctor,
  emoji,
}) => {
  return (
    <div className="bg-indigo-100 text-gray-800 p-4 rounded-2xl flex justify-between items-center shadow-sm">
      <div>
        <h3 className="font-semibold">
          {title} {emoji}
        </h3>
        <p className="text-sm">{time}</p>
        <p className="text-xs text-gray-500">{doctor}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
