import Pagination from "@/Components/panel/Pagination";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const index = () => {
    const { users } = usePage().props;
    return (
        <DashboardLayout>
            <div className="bg-white min-h-full rounded-3xl py-5 px-6">
                <h2 className="text-2xl font-bold ">All Users</h2>
                <div className="mt-5">
                    <div className="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search-users"
                                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full w-80 bg-[#F9F9F9] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for users"
                            />
                        </div>
                    </div>
                    <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="checkbox-all-search"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Profile
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data
                                    ? users.data.map((user) => (
                                          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                              <td className="w-4 p-4">
                                                  <div className="flex items-center">
                                                      <input
                                                          id="checkbox-table-search-1"
                                                          type="checkbox"
                                                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                      />
                                                      <label
                                                          htmlFor="checkbox-table-search-1"
                                                          className="sr-only"
                                                      >
                                                          checkbox
                                                      </label>
                                                  </div>
                                              </td>
                                              <td className="px-6 py-4">
                                                  <div className="flex items-center">
                                                      <p className="font-semibold">
                                                          #{user.id}
                                                      </p>
                                                  </div>
                                              </td>
                                              <th
                                                  scope="row"
                                                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                              >
                                                  <img
                                                      className="w-10 h-10 rounded-full"
                                                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                                                      alt="Jese image"
                                                  />
                                                  <div className="pl-3">
                                                      <div className="text-base font-semibold">
                                                          {user.name}
                                                      </div>
                                                      <div className="font-normal text-gray-500">
                                                          {user.email}
                                                      </div>
                                                  </div>
                                              </th>

                                              <td className="px-6 py-4">
                                                  <div className="flex items-center">
                                                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                                                      Online
                                                  </div>
                                              </td>
                                              <td className="px-6 py-4 flex gap-1">
                                                  <button className="transition-all w-9 h-9 rounded-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600">
                                                      <FiEdit2></FiEdit2>
                                                  </button>
                                                  <button className="transition-all w-9 h-9 rounded-full flex items-center justify-center bg-rose-500 text-white hover:bg-rose-600">
                                                      <MdDelete></MdDelete>
                                                  </button>
                                              </td>
                                          </tr>
                                      ))
                                    : "No users found"}
                            </tbody>
                        </table>
                    </div>
                    <Pagination users={users}></Pagination>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default index;
