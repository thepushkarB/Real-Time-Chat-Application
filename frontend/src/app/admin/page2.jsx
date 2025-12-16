"use client"
import React from "react";
import OrgChartPage from "@/components/OrgChart";

const AdminPage = () => {
    return (
        <div className="flex flex-col h-screen bg-slate-50">
            <h1 className="text-2xl font-bold text-black p-4">Admin Page</h1>
            {/* nav bar */}
            <div className="flex-1 w-full overflow-hidden rounded-lg">
                <OrgChartPage />
            </div>
        </div>
    )
}

export default AdminPage;