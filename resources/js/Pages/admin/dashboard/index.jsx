import DashboardLayout from "@/Layouts/DashboardLayout";
import MetricCard from "@/Pages/shared/MetricCard";
import { usePage } from "@inertiajs/react";
import React from "react";
import { PiUserSwitchBold } from "react-icons/pi";

const index = () => {
    const { usersCount, meetingsCount } = usePage().props;
    return (
        <DashboardLayout>
            <div className="flex items-center justify-center gap-4">
                <MetricCard title={"Total Users"} value={usersCount}>
                    <PiUserSwitchBold className="text-3xl text-blue-500"></PiUserSwitchBold>
                </MetricCard>
                <MetricCard title={"Total Meetings"} value={meetingsCount}>
                    <PiUserSwitchBold className="text-3xl text-blue-500"></PiUserSwitchBold>
                </MetricCard>
            </div>
        </DashboardLayout>
    );
};

export default index;
