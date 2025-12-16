"use client";
import React, { useState } from "react";
import OrgChartPage from "@/components/OrgChart";
import UploadAppointmentPage from "@/components/UploadAppointmentPage";
import AddUserPage from "@/components/AddUserPage";

const AdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open on desktop
    const [currentView, setCurrentView] = useState('home'); // 'home' or 'orgChart'

    const Sidebar_tabs = {
        home: "Dashboard",
        orgChart: "Organization Management",
        upload: "Upload Appointment",
        addUser: "Add User",
    };

    // const Sidebar_sub_tabs = {
    //     home: <span>Home</span>,
    //     orgChart: <span>Organization Management</span>,
    //     upload: <span>Upload Appointments</span>,
    //     addUser: <span>Add User</span>,
    // };

    // Styles for active/inactive nav items
    const getNavItem = (viewName) => {
        const isActive = currentView === viewName;
        return isActive
            ? "flex items-center gap-3 px-3 py-2 rounded-md bg-black text-white cursor-pointer shadow-sm"
            : "flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-gray-100 hover:text-black rounded-md cursor-pointer transition-colors";
    };

    return (
        <div className="relative flex h-screen w-full flex-row overflow-hidden bg-white font-sans text-neutral-900">
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* SideNavBar */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full lg:w-20 lg:translate-x-0"}
          lg:static lg:block
        `}
            >

                {/* SideNavBar Header */}
                <div className={`flex flex-col gap-4 h-full p-4 overflow-y-auto overflow-x-hidden`}>
                    <div className={`flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"} mb-2`}>
                        {isSidebarOpen && (
                            <div className="min-w-0">
                                <h1 className="text-black text-base font-bold leading-normal truncate">Crystal Auto</h1>
                                <p className="text-neutral-500 text-sm font-normal leading-normal truncate">Admin Dashboard</p>
                            </div>
                        )}

                        <button
                            className="p-1 rounded-md text-neutral-500 hover:bg-gray-100 hover:text-black focus:outline-none transition-colors cursor-pointer shrink-0"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        </button>
                    </div>

                    {/* EXPANDED Nav */}
                    <div className={`flex flex-col gap-2 ${!isSidebarOpen && 'hidden'}`}>
                        <nav className="flex flex-col gap-2">
                            <div onClick={() => setCurrentView('home')} className={getNavItem('home')}>
                                <span className="material-symbols-outlined ">dashboard</span>
                                <p className="text-sm font-medium leading-normal whitespace-nowrap">Home</p>
                            </div>

                            <div onClick={() => setCurrentView('orgChart')} className={getNavItem('orgChart')}>
                                <span className="material-symbols-outlined">corporate_fare</span>
                                <p className="text-sm font-medium leading-normal whitespace-nowrap">Organization Chart</p>
                            </div>

                            <div onClick={() => setCurrentView('upload')} className={getNavItem('upload')}>
                                <span className="material-symbols-outlined">upload</span>
                                <p className="text-sm font-medium leading-normal whitespace-nowrap">Upload Appointment</p>
                            </div>
                            <div onClick={() => setCurrentView('addUser')} className={getNavItem('addUser')}>
                                <span className="material-symbols-outlined">person_add</span>
                                <p className="text-sm font-medium leading-normal whitespace-nowrap">Add User</p>
                            </div>
                        </nav>
                    </div>

                    {/* COLLAPSED Nav (Icon Only) */}
                    {!isSidebarOpen && (
                        <nav className="flex flex-col gap-2 items-center">
                            <div onClick={() => setCurrentView('home')} className={`${getNavItem('home')} justify-center px-0 w-10 h-10`}>
                                <span className="material-symbols-outlined" title="Dashboard">dashboard</span>
                            </div>

                            <div onClick={() => setCurrentView('orgChart')} className={`${getNavItem('orgChart')} justify-center px-0 w-10 h-10`}>
                                <span className="material-symbols-outlined" title="Organization Chart">corporate_fare</span>
                            </div>

                            <div onClick={() => setCurrentView('upload')} className={`${getNavItem('upload')} justify-center px-0 w-10 h-10`}>
                                <span className="material-symbols-outlined" title="Upload Appointment">upload</span>
                            </div>
                            <div onClick={() => setCurrentView('addUser')} className={`${getNavItem('addUser')} justify-center px-0 w-10 h-10`}>
                                <span className="material-symbols-outlined" title="Add User">person_add</span>
                            </div>
                        </nav>
                    )}

                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">

                {/* Top Header - Restored for functionality */}
                <header className="flex-none h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-20">
                    <div className="flex items-center gap-4">
                        <button
                            className="p-1 rounded-md text-neutral-500 hover:bg-gray-100 hover:text-black focus:outline-none transition-colors lg:hidden"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        </button>
                        <h2 className="text-lg font-semibold text-neutral-900">
                            {Sidebar_tabs[currentView]}
                        </h2>
                    </div>

                    {/* Right side header actions (User profile, etc. - Placeholder) */}
                    {/* <div className="flex items-center gap-3">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold border border-red-200">
                            PB
                        </div>
                    </div> */}
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-6">

                    {/* Custom Breadcrumb / Header area inside content for this layout style */}
                    <div className="mb-1">
                        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-1">
                            <span
                                className="text-neutral-500 font-bold text-xl"
                            >
                                {/* {Sidebar_tabs[currentView]} */}
                                {/* <br /> */}
                                {/* {Sidebar_sub_tabs[currentView]} */}
                            </span>
                        </div>
                    </div>


                    {/* HOME VIEW */}
                    {currentView === 'home' && (
                        <div className="max-w-7xl mx-auto space-y-6">
                            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center py-20">
                                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-6">
                                    <span className="material-symbols-outlined text-4xl text-neutral-500">home</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">Welcome to Crystal Auto Admin</h3>
                                <p className="text-neutral-500 max-w-md mx-auto">
                                    Manage your organization structure, users, and appointments from this dashboard. Select an option from the sidebar to get started.
                                </p>
                                <div className="mt-8 flex justify-center gap-4">
                                    <button
                                        onClick={() => setCurrentView('orgChart')}
                                        className="px-6 py-2 bg-black hover:bg-neutral-800 text-white rounded-md font-medium transition-colors cursor-pointer"
                                    >
                                        View Org Chart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ORG CHART VIEW */}
                    {currentView === 'orgChart' && (
                        <div className="flex flex-col h-[calc(100vh-180px)] pb-6">
                            {/* Chart Container - full height with proper bottom margin */}
                            <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <OrgChartPage />
                            </div>
                        </div>
                    )}

                    {/* UPLOAD APPOINTMENT VIEW */}
                    {/* todo: fix the chart */}
                    {currentView === 'upload' && (
                        <div className="flex flex-col gap-4 h-full">
                            {/* Chart Container */}
                            <div className="flex-1 bg-white rounded-lg p-0 border border-gray-200 overflow-hidden relative min-h-[600px] shadow-sm">
                                <UploadAppointmentPage />
                            </div>
                        </div>
                    )}

                    {/* ADD USER VIEW */}
                    {currentView === 'addUser' && (
                        <div className="flex flex-col gap-4 h-full">
                            {/* Chart Container */}
                            <div className="flex-1 bg-white rounded-lg p-0 border border-gray-200 overflow-hidden relative min-h-[600px] shadow-sm">
                                <AddUserPage />
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminPage;