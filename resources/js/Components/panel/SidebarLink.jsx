import React from "react";

const SidebarLink = ({ active = false, name, children }) => {
    return (
        <li
            className={`text-[16px] font-semibold cursor-pointer 
            hover:bg-blue-500 hover:text-white transition-all p-2 rounded-xl ${
                active ? "bg-blue-500 text-white" : "text-[#D0D1D5]"
            }`}
        >
            <div className="flex items-center gap-2">
                <div className="text-[20px]">{children}</div>
                <span className="mt-[0.5px]">{name}</span>
            </div>
        </li>
    );
};

export default SidebarLink;
