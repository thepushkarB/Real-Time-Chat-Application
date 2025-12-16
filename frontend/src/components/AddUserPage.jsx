"use client";
import React from "react";
import Link from "next/link";

const AddUserPage = () => {
    return (
        <div className="w-full h-full bg-white text-black overflow-y-auto">
            {/* Header / Breadcrumbs */}
            <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-1">
                        <Link href="/admin" className="cursor-pointer hover:text-black transition-colors">Dashboard</Link>
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                        {/* <span className="cursor-pointer hover:text-white transition-colors">Users</span> */}
                        {/* <span className="material-symbols-outlined text-base">chevron_right</span> */}
                        <span className="text-black">Add User</span>
                    </div>
                </div>
            </header>

            <div className="p-6 md:p-8 max-w-7xl mx-auto">
                {/* Form Layout */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Form Fields */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-8">

                        {/* User Details Section */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h2 className="text-black text-xl font-bold mb-6">User Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">First Name</span>
                                    <input className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors" placeholder="Enter first name" type="text" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Last Name</span>
                                    <input className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors" placeholder="Enter last name" type="text" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Email Address</span>
                                    <input className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors" placeholder="Enter email address" type="email" />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Mobile Number</span>
                                    <input className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors" placeholder="Enter mobile number" type="tel" />
                                </label>
                            </div>
                        </div>

                        {/* Organization & Role Section */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h2 className="text-black text-xl font-bold mb-6">Organization & Role</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Dealership</span>
                                    <select className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors cursor-pointer">
                                        <option>Select Dealership</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Branch</span>
                                    <select className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors cursor-pointer" >
                                        <option>Select Branch</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Function</span>
                                    <select className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors cursor-pointer" >
                                        <option>Select Function</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-neutral-600 font-medium">Role</span>
                                    <select className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-4 py-3 outline-none transition-colors cursor-pointer">
                                        <option>Select Role</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* Settings Section */}
                        {/* <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h2 className="text-black text-xl font-bold mb-6">Settings</h2>
                            <div className="flex flex-col gap-4">
                                <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-md transition-colors">
                                    <span className="text-neutral-600 font-medium">Send welcome invite</span>
                                    <div className="relative inline-flex items-center">
                                        <input defaultChecked type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                                    </div>
                                </label>
                            </div>
                        </div> */}

                    </div>

                    {/* Right Column: Avatar Uploader */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-8">
                            <h2 className="text-black text-xl font-bold mb-6">Avatar</h2>
                            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-black transition-colors">
                                <div className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center mb-4 border-4 border-gray-100">
                                    <span className="material-symbols-outlined text-6xl text-neutral-400">add_a_photo</span>
                                </div>
                                <button className="px-4 py-2 bg-black text-white text-sm font-bold rounded-lg hover:bg-neutral-800 transition-colors mb-2 cursor-pointer">
                                    Upload Image
                                </button>
                                <p className="text-neutral-500 text-sm">or drag and drop</p>
                                <p className="text-neutral-500 text-xs mt-2">JPG, PNG up to 2MB.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Action Bar */}
                <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                    <button className="px-6 py-3 bg-transparent text-black font-bold rounded-lg border border-black hover:bg-gray-100 transition-colors cursor-pointer">
                        Cancel
                    </button>
                    <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-black/20 cursor-pointer">
                        Create User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserPage;
