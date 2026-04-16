"use client";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const iconMap = {
    call: <FaPhoneAlt className=" text-green-500 text-[40px]" />,
    text: <FaCommentDots className=" text-yellow-500 text-[40px]" />,
    video: <FaVideo className=" text-blue-500 text-[40px]" />,
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Timeline</h1>

      {timeline.map(item => (
        <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">

          <div className="text-xl">
            {iconMap[item.type]}
          </div>

          <div>
            <p className="font-medium">
              {item.type} with {item.name}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(item.date).toDateString()}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}