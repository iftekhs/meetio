import SidebarLink from "@/Components/panel/SidebarLink";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GoGear } from "react-icons/go";

const DashboardLayout = ({ children }) => {
    return (
        <div id="panel">
            {/* TODO: Navbar */}
            <div className="flex gap-3 min-h-screen bg-gray-200 p-10">
                <aside className="w-64 bg-white rounded-3xl p-4">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Meetio
                    </h2>
                    <div className="mt-6">
                        <ul className="flex flex-col gap-2">
                            <SidebarLink
                                link={route("admin.dashboard")}
                                name={"Dashboard"}
                            >
                                <BiHomeAlt></BiHomeAlt>
                            </SidebarLink>
                            <SidebarLink link={"/test"} name={"Users"}>
                                <FiUsers></FiUsers>
                            </SidebarLink>
                            <SidebarLink link={"/test"} name={"Settings"}>
                                <GoGear></GoGear>
                            </SidebarLink>
                        </ul>
                    </div>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
