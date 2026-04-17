"use client";
import React from 'react';
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Banner = ({ friends }) => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);

    const interactionsThisMonth = timeline.filter(item => {
        const itemDate = new Date(item.timestamp);
        const now = new Date();

        return (
            itemDate.getMonth() === now.getMonth() &&
            itemDate.getFullYear() === now.getFullYear()
        );
    });

    const counts = {
        overdue: 0,
        "on-track": 0,
    };

    friends.forEach(friend => {
        if (friend.status === "overdue") counts.overdue++;
        if (friend.status === "on-track") counts["on-track"]++;
    });

    return (
        <div className='pb-5 sm:pb-8 border-b border-gray-300 mx-auto'>

    {/* Top Content */}
    <div className='space-y-4 sm:space-y-7 lg:space-y-8 text-center mx-auto'>

        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
            Friends to keep close in your life
        </h1>

        <p className="text-sm sm:text-base lg:text-lg max-w-md sm:max-w-xl lg:max-w-2xl mx-auto text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
        </p>

        <button className="btn text-white bg-[#244D3F] px-4 sm:px-6">
            <FaPlus /> Add a Friend
        </button>
    </div>

    {/* Stats Section */}
    <div className="mt-5 sm:mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 text-center mx-auto">

        <div className='w-full sm:w-65 h-20 sm:h-32 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl sm:text-3xl'>
                {friends.length}
            </h1>
            <p className='text-gray-500 text-sm sm:text-base'>Total Friends</p>
        </div>

        <div className='w-full sm:w-65 h-20 sm:h-32 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl sm:text-3xl'>
                {counts["on-track"]}
            </h1>
            <p className='text-gray-500 text-sm sm:text-base'>On Track</p>
        </div>

        <div className='w-full sm:w-65 h-20 sm:h-32 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl sm:text-3xl'>
                {counts.overdue}
            </h1>
            <p className='text-gray-500 text-sm sm:text-base'>Need Attention</p>
        </div>

        <div className='w-full sm:w-65 h-20 sm:h-32 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl sm:text-3xl'>
                {interactionsThisMonth.length}
            </h1>
            <p className='text-gray-500 text-sm sm:text-base'>Interactions This Month</p>
        </div>

    </div>
</div>
    );
};

export default Banner;