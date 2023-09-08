import SidebarLink from "@/Components/panel/SidebarLink";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GoGear } from "react-icons/go";

const DashboardLayout = () => {
    return (
        <div id="panel" class="flex min-h-screen bg-gray-200 p-10">
            <aside class="w-1/7 min-w-[250px] bg-white rounded-3xl p-4">
                <h2 class="text-2xl font-bold text-center mb-4">Meetio</h2>

                <div class="mt-6">
                    <ul className="flex flex-col gap-2">
                        <SidebarLink active={true} name={"Dashboard"}>
                            <BiHomeAlt></BiHomeAlt>
                        </SidebarLink>
                        <SidebarLink name={"Users"}>
                            <FiUsers></FiUsers>
                        </SidebarLink>
                        <SidebarLink name={"Settings"}>
                            <GoGear></GoGear>
                        </SidebarLink>
                    </ul>
                </div>
            </aside>

            <main class="w-6/7 p-4"></main>
        </div>
    );
};

export default DashboardLayout;
