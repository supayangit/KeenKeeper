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
        <div className="sm:p-4 lg:p-6 space-y-4 sm:space-y-6">

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Friends Analytics
            </h1>

            <div className="flex flex-col items-center gap-4 w-full bg-white rounded-box p-4 sm:p-6 lg:p-10 shadow-sm">

                {/* Header */}
                <div className="w-full">
                    <h2 className="text-base sm:text-lg lg:text-xl font-medium text-center sm:text-left">
                        By Interaction Type
                    </h2>
                </div>

                {hasData ? (

                    // Centering wrapper
                    <div className="w-full flex justify-center items-center">

                        <PieChart
                            width={300}
                            height={300}
                            className="sm:w-[400px] sm:h-[400px]"
                        >
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="45%"
                                innerRadius={70}
                                outerRadius={120}
                                dataKey="value"
                                label
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                wrapperStyle={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            />
                        </PieChart>

                    </div>

                ) : (

                    <div className="flex flex-col items-center justify-center text-gray-500 py-10 sm:py-14 lg:py-16 text-center">
                        <div className="text-4xl sm:text-5xl mb-2">📊</div>
                        <p className="text-base sm:text-lg font-semibold">
                            No interaction data yet
                        </p>
                        <p className="text-xs sm:text-sm">
                            Calls, texts, and videos will appear here
                        </p>
                    </div>

                )}

            </div>
        </div>
    );
};

export default StatsPage;