import React from "react";

const MetricCard = ({ title, value, children }) => {
    return (
        <div className="w-64 p-4 rounded-2xl bg-white shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400">{title}</p>
                    <h2 className="text-2xl font-bold">{value}</h2>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MetricCard;
