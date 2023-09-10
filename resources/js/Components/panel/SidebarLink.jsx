import { Link, usePage } from "@inertiajs/react";
import React from "react";

const SidebarLink = ({ link, name, children }) => {
    const { props } = usePage();

    return (
        <Link href={link}>
            <li
                className={`text-[16px] font-semibold cursor-pointer 
            hover:bg-blue-500 hover:text-white transition-all p-2 rounded-xl ${
                props.ziggy.location === link
                    ? "bg-blue-500 text-white"
                    : "text-[#D0D1D5]"
            }`}
            >
                <div className="flex items-center gap-2">
                    <div className="text-[20px]">{children}</div>
                    <span className="mt-[0.5px]">{name}</span>
                </div>
            </li>
        </Link>
    );
};

export default SidebarLink;
