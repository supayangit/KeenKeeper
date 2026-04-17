"use client";
import { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

export default function TimelinePage() {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();

        const isToday =
            date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear();

        const isYesterday =
            new Date(now.setDate(now.getDate() - 1)).getDate() === date.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear();

        const time = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        if (isToday) {
            return `Today • ${time}`;
        }

        if (isYesterday) {
            return `Yesterday • ${time}`;
        }

        return `${date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        })} • ${time}`;
    };

    const iconMap = {
        call: <FaPhoneVolume className="text-green-500 text-[40px]" />,
        text: <IoMdText className="text-purple-500 text-[40px]" />,
        video: <FaVideo className="text-blue-500 text-[40px]" />,
    };

    // filter 
    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter(item => item.type === filter);

    return (
        <div className="sm:p-4 lg:p-6 space-y-4 sm:space-y-6">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Timeline
            </h1>

            {/* Filter Menu */}
            <div className="flex flex-wrap gap-2">

                <button
                    onClick={() => setFilter("all")}
                    className={`btn text-sm sm:text-base px-3 sm:px-4 ${filter === "all" ? "bg-[#244D3F] text-white" : ""
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("call")}
                    className={`btn text-sm sm:text-base px-3 sm:px-4 ${filter === "call" ? "bg-[#244D3F] text-white" : ""
                        }`}
                >
                    Call
                </button>

                <button
                    onClick={() => setFilter("text")}
                    className={`btn text-sm sm:text-base px-3 sm:px-4 ${filter === "text" ? "bg-[#244D3F] text-white" : ""
                        }`}
                >
                    Text
                </button>

                <button
                    onClick={() => setFilter("video")}
                    className={`btn text-sm sm:text-base px-3 sm:px-4 ${filter === "video" ? "bg-[#244D3F] text-white" : ""
                        }`}
                >
                    Video
                </button>

            </div>

            {/* Timeline List */}
            {filteredTimeline.length === 0 ? (

                // Empty state
                <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 text-gray-500 text-center px-4">

                    <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🕒</div>

                    <p className="text-base sm:text-lg font-medium">
                        No interaction history
                    </p>

                    <p className="text-xs sm:text-sm">
                        Calls, texts, and videos will appear here
                    </p>

                </div>

            ) : (

                <div className="space-y-3 sm:space-y-4">
                    {filteredTimeline.map(item => (
                        <div
                            key={item.id}
                            className="flex items-start sm:items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded shadow"
                        >

                            {/* Icon */}
                            <div className="text-lg sm:text-xl shrink-0">
                                {iconMap[item.type]}
                            </div>

                            {/* text content */}
                            <div className="flex flex-col">
                                <p className="font-medium text-sm sm:text-base leading-tight">
                                    {item.type} with {item.name}
                                </p>

                                <p className="text-xs sm:text-sm text-gray-500">
                                    {formatDate(item.timestamp)}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            )}
        </div>
    );
}