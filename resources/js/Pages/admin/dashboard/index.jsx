import DashboardLayout from "@/Layouts/DashboardLayout";
import MetricCard from "@/Pages/shared/MetricCard";
import { usePage } from "@inertiajs/react";
import React from "react";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { BiVideo } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";

const index = () => {
    const { usersCount, meetingsCount, loginsCount } = usePage().props;
    return (
        <DashboardLayout>
            <div className="flex items-center justify-center gap-4">
                <MetricCard title={"Total Users"} value={usersCount}>
                    <PiUsersThreeDuotone className="text-3xl text-blue-500"></PiUsersThreeDuotone>
                </MetricCard>
                <MetricCard title={"Total Meetings"} value={meetingsCount}>
                    <BiVideo className="text-3xl text-blue-500"></BiVideo>
                </MetricCard>
                <MetricCard title={"Logins"} value={loginsCount}>
                    <AiOutlineLogin className="text-3xl text-blue-500"></AiOutlineLogin>
                </MetricCard>
            </div>
        </DashboardLayout>
    );
};

export default index;
