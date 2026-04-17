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
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold">Timeline</h1>

            {/* Filter Menu */}
            <div className="flex gap-2">
                <button
                    onClick={() => setFilter("all")}
                    className={`btn ${filter === "all" ? "btn bg-[#244D3F] text-white" : ""}`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("call")}
                    className={`btn ${filter === "call" ? "btn bg-[#244D3F] text-white" : ""}`}
                >
                    Call
                </button>

                <button
                    onClick={() => setFilter("text")}
                    className={`btn ${filter === "text" ? "btn bg-[#244D3F] text-white" : ""}`}
                >
                    Text
                </button>

                <button
                    onClick={() => setFilter("video")}
                    className={`btn ${filter === "video" ? "btn bg-[#244D3F] text-white" : ""}`}
                >
                    Video
                </button>
            </div>

            {/* Timeline List */}
            {filteredTimeline.length === 0 ? (
                // empty state
                <div className="flex flex-col items-center justify-center mt-16 text-gray-500">
                    <div className="text-5xl mb-3">🕒</div>
                    <p className="text-lg font-medium">No interaction history</p>
                    <p className="text-sm">Calls, texts, and videos will appear here</p>
                </div>
            ) :                   
            filteredTimeline.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 bg-white p-4 rounded shadow"
                        >
                            <div className="text-xl">{iconMap[item.type]}</div>

                            <div>
                                <p className="font-medium">
                                    {item.type} with {item.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {formatDate(item.timestamp)}
                                </p>
                            </div>
                        </div>
                    ))
                }
        </div>
    );
}