import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ users }) => {
    console.log(users);
    return (
        <div class="mt-3 flex items-center justify-between border-gray-200 bg-white py-3">
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700 flex gap-1">
                        Showing
                        <span class="font-medium">{users.from}</span>
                        to
                        <span class="font-medium">{users.to}</span>
                        of
                        <span class="font-medium">{users.total}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav
                        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <Link
                            href={users.prev_page_url}
                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">Previous</span>
                            <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Link>

                        <div className="border">
                            {users.links &&
                                users.links.map((link, index) =>
                                    index !== 0 &&
                                    index !== users.links.length - 1 ? (
                                        <Link
                                            href={link.url}
                                            aria-current="page"
                                            class={`relative z-10 ${
                                                link.active &&
                                                "bg-blue-600 text-white"
                                            } inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        ""
                                    )
                                )}
                        </div>
                        <Link
                            href={users.next_page_url}
                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">Next</span>
                            <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
