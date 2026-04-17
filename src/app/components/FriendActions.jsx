"use client";
import React from 'react';
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function FriendActions({ friend }) {

    const handleAction = (type) => {
        const newEvent = {
            id: Date.now(),
            type,
            name: friend.name,
            date: new Date().toISOString(),
        };

        // get existing timeline
        const existing = JSON.parse(localStorage.getItem("timeline")) || [];

        // adding new event in local storage
        const updated = [newEvent, ...existing];

        localStorage.setItem("timeline", JSON.stringify(updated));

        const getIcon = () => {
            if (type === "call") return <FaPhoneAlt />;
            if (type === "text") return <FaCommentDots />;
            return <FaVideo />;
        };

        toast.success(
            <span className='flex items-center gap-2'>
                {getIcon()} {type} with {friend.name}!
            </span>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <button onClick={() => handleAction("call")} className="btn h-24">
                <FaPhoneAlt /> Call
            </button>

            <button onClick={() => handleAction("text")} className="btn h-24">
                <FaCommentDots /> Text
            </button>

            <button onClick={() => handleAction("video")} className="btn h-24">
                <FaVideo /> Video
            </button>

        </div>
    );
}