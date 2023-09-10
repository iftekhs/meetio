import Sidebar from "@/Components/panel/Sidebar";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";

const DashboardLayout = ({ children }) => {
    const { auth } = usePage().props;
    const [userDropdown, setUserDropdown] = useState(true);
    const userDropdownTrigger = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            userDropdownTrigger.current &&
                !userDropdownTrigger.current.contains(event.target) &&
                setUserDropdown(false);
        };

        document.addEventListener("click", handleClickOutside);
    }, []);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                    <div className="flex items-center md:order-2 relative">
                        <button
                            type="button"
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            ref={userDropdownTrigger}
                            onClick={() => setUserDropdown(!userDropdown)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://randomuser.me/api/portraits/men/22.jpg"
                                alt="user photo"
                            />
                        </button>
                        {userDropdown && (
                            <div
                                className="z-50 top-1/2 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">
                                        {auth.user.name}
                                    </span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                        {auth.user.email}
                                    </span>
                                </div>
                                <ul
                                    className="py-2"
                                    aria-labelledby="user-menu-button"
                                >
                                    <li>
                                        <div
                                            href="#"
                                            className="flex items-center gap-2 cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                            <AiOutlineLogin></AiOutlineLogin>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div id="panel" className="min-h-[94vh] bg-gray-200">
                <div className="flex gap-3 p-10">
                    <Sidebar></Sidebar>
                    <main className="flex-1">{children}</main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
