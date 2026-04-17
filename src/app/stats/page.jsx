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

    const COLORS = ["green", "purple", "blue"];
    const hasData = timeline.length > 0;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Friends Analytics</h1>

            <div className="flex flex-col justify-center items-center gap-4 w-full bg-white rounded-box p-10 shadow-sm">

                <div className="flex w-full items-left">
                    <h2 className="text-xl font-medium">
                        By Interaction Type
                    </h2>
                </div>

                {hasData ?
                    (<PieChart width={400} height={400}>
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
                    </PieChart>) :
                    (
                        // empty state
                        <div className="flex flex-col items-center justify-center text-gray-500 py-16">
                            <div className="text-5xl mb-2">📊</div>
                            <p className="text-lg font-semibold">
                                No interaction data yet
                            </p>
                            <p className="text-sm">
                                Calls, texts, and videos will appear here
                            </p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default StatsPage;