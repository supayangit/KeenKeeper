"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const StatsPage = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);

    // Count types
    const counts = {
        call: 0,
        text: 0,
        video: 0,
    };

    timeline.forEach(item => {
        if (counts[item.type] !== undefined) {
            counts[item.type]++;
        }
    });

    // Convert to chart data
    const chartData = [
        { name: "Call", value: counts.call },
        { name: "Text", value: counts.text },
        { name: "Video", value: counts.video },
    ];

    const COLORS = ["#22c55e", "#eab308", "#3b82f6"];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Friends Analytics</h1>

            <div className="flex flex-col justify-center items-center gap-4 w-full bg-white rounded-box p-10 shadow-sm">

                <div className="flex w-full items-left">
                    <h2 className="text-xl font-medium">
                    By Interaction Type
                </h2>
                </div>

                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}  //donut
                        outerRadius={120}
                        dataKey="value"
                        label
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;