"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatDateTime } from "../utils/date";

const UploadAppointmentPage = () => {
    const router = useRouter();

    return (
        <div className="w-full h-full bg-white text-black overflow-y-auto">
            {/* Header Section */}
            <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-1">
                        <Link href="/admin" className="cursor-pointer hover:text-black transition-colors">Dashboard</Link>
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="text-black">Upload Appointment</span>
                    </div>
                </div>
            </header>

            <div className="p-6 md:p-8 space-y-8">

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4">
                        {/* <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold bg-black text-white">1</div> */}
                        <div className="w-full">
                            <h3 className="text-xl font-bold mb-1">Upload File or Provide URL</h3>
                            <p className="text-neutral-500 mb-6">Select a local CSV/XLSX file or enter a Google Sheet URL to begin.</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                {/* File Drop Zone */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center flex flex-col items-center justify-center h-full hover:border-black transition-colors">
                                    <span className="material-symbols-outlined text-5xl text-neutral-400 mb-4">cloud_upload</span>
                                    <p className="mb-2 font-semibold">Drag & drop files here</p>
                                    <p className="text-sm text-neutral-500 mb-4">Supports: CSV, XLSX</p>
                                    <button className="px-4 py-2 border border-black rounded-md text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer text-black">Browse Files</button>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* URL Input */}
                                    <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                        <label className="block font-medium" htmlFor="sheet-url">Or enter Google Sheet URL</label>
                                        <div className="flex gap-2">
                                            <input
                                                className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-black px-3 py-2 outline-none"
                                                id="sheet-url"
                                                placeholder="https://docs.google.com/spreadsheets/d/..."
                                                type="url"
                                            />
                                            {/* <button className="bg-black text-white px-5 py-2.5 rounded-md font-semibold whitespace-nowrap hover:bg-neutral-800 transition-colors cursor-pointer">Fetch Data</button> */}
                                        </div>
                                        <p className="text-xs text-neutral-500">Ensure the sheet is public or shared with our service account.</p>
                                    </div>

                                    {/* Select appointment type */}
                                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                        <label className="flex flex-col gap-2">
                                            <span className="text-neutral-600 font-medium">Select Appointment Type</span>
                                            <select className="w-full rounded-md bg-white border border-gray-300 focus:ring-black focus:border-black text-neutral-400 px-4 py-3 outline-none transition-colors cursor-pointer">
                                                <option value="B1">B1</option>
                                                <option value="B2">B2</option>
                                                <option value="B3">B3</option>
                                                <option value="B4">B4</option>
                                                <option value="Pick up">Pick up</option>
                                                <option value="Drop off">Drop off</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Validation (Commented Originally) */}
                {/* <div className="bg-[#121212] p-6 rounded-lg border border-[#262626]">...</div> */}
                <div className="w-full flex justify-center flex-shrink-0 mt-4">
                    <button className="px-8 py-3 bg-black text-white rounded-md font-semibold text-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md">
                        <span className="material-symbols-outlined">upload</span>
                        <span>Upload Appointments</span>
                    </button>
                </div>

                <div className="bg-white px-6 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-left font-bold text-black uppercase tracking-wider">Appointments</h3>
                    <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Upload Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Uploaded By
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Sheet Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 cursor-pointer">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {formatDateTime("2025-11-15T11:34:00")}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Pushkar Bankar
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        B1
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {formatDateTime("2025-11-16T09:12:00")}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Vikas Gupta
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        B2
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {formatDateTime("2025-11-17T14:45:00")}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Adarsh Pandey
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Pick up
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UploadAppointmentPage;