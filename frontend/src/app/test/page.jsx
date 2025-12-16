"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoSearch, IoAdd, IoChatbubble, IoCalendar, IoPeople, IoSettings } from "react-icons/io5";
import { MdPriorityHigh } from "react-icons/md";
import { getUserGroupsWithLastMessage } from "@/utils/api";

const TestPage = () => {
    const router = useRouter();
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const res = await getUserGroupsWithLastMessage();

                const formatted = res.map((g) => ({
                    id: g.groupId,
                    name: g.name,
                    avatar: g.avatar,
                    lastMessage: g.lastMessage?.text || "No messages yet",
                    timestamp: g.lastMessage
                        ? new Date(g.lastMessage.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })
                        : "",
                    unreadCount: 0,
                    isUrgent: false,
                    isOnline: false, // You might want to wire this up if data is available
                    isGroup: true,
                    memberCount: g.members.length,
                }));

                setConversations(formatted);
            } catch (err) {
                console.error("Error fetching groups", err);
            }
        };

        fetchGroups();
    }, []);

    return (
        <div className="bg-gray-800 dark:bg-black font-display flex justify-center min-h-screen">
            <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-white">
                <main className="flex w-full flex-1 flex-col">
                    <div className="p-4 bg-white sticky top-0 z-10">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-black">Conversations</h2>
                            <div className="flex space-x-1">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="flex flex-col w-full">
                                <div className="relative flex w-full flex-1 items-stretch">
                                    <div className="text-neutral-500 absolute inset-y-0 left-0 flex items-center pl-4">
                                        <IoSearch className="text-xl" />
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-black focus:outline-0 focus:ring-2 focus:ring-black border border-gray-200 bg-gray-100 h-12 placeholder:text-gray-500 px-12 text-sm font-normal leading-normal" placeholder="Search by vehicle or message..." />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 pb-4 overflow-x-auto">
                        <div className="flex gap-2 whitespace-nowrap">
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-black px-4">
                                <p className="text-white text-sm font-medium leading-normal">Today</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-4 hover:bg-gray-100">
                                <p className="text-black text-sm font-medium leading-normal">Yesterday</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-4 hover:bg-gray-100">
                                <p className="text-black text-sm font-medium leading-normal">All</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-4 hover:bg-gray-100">
                                <p className="text-black text-sm font-medium leading-normal">Escalations</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col overflow-y-auto pb-24">
                        <div className="flex flex-col">
                            {conversations.map((conversation) => (
                                <div
                                    key={conversation.id}
                                    onClick={() => router.push(`/testChat`)}
                                    className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-0"
                                >
                                    <div className="relative shrink-0">
                                        <img
                                            src={conversation.avatar}
                                            alt={conversation.name}
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 object-cover"
                                        />
                                        {conversation.isOnline && (
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className="text-black text-base font-bold leading-normal truncate">
                                                {conversation.name}
                                            </p>
                                        </div>
                                        <p className="text-neutral-500 text-sm font-normal leading-normal truncate">
                                            {conversation.lastMessage}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            {conversation.isGroup && (
                                                <span className="text-xs text-neutral-400">
                                                    Group • {conversation.memberCount} members
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5 shrink-0 ml-2">
                                        <p className="text-black text-xs font-medium">{conversation.timestamp}</p>
                                        {conversation.unreadCount > 0 && (
                                            <div className="flex size-6 items-center justify-center rounded-full bg-red-500">
                                                <span className="text-white text-xs font-bold">{conversation.unreadCount}</span>
                                            </div>
                                        )}
                                        {conversation.isUrgent && (
                                            <MdPriorityHigh className="text-red-500 text-2xl" />
                                        )}
                                    </div>
                                </div>
                            ))}
                            {conversations.length === 0 && (
                                <div className="p-4 text-center text-gray-500">
                                    Loading conversations...
                                </div>
                            )}
                        </div>
                    </div>
                </main>

                <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-md border-t border-gray-200 bg-white">
                    <div className="flex h-20 justify-around">
                        <a className="flex flex-col items-center justify-center gap-1 text-black w-full" href="#">
                            <IoChatbubble className="text-2xl" />
                            <span className="text-xs font-medium">Chats</span>
                        </a>
                        <a className="flex flex-col items-center justify-center gap-1 text-neutral-500 w-full hover:text-black" href="#">
                            <IoCalendar className="text-2xl" />
                            <span className="text-xs font-medium">Appointments</span>
                        </a>
                        <a className="flex flex-col items-center justify-center gap-1 text-neutral-500 w-full hover:text-black" href="#">
                            <IoPeople className="text-2xl" />
                            <span className="text-xs font-medium">Customers</span>
                        </a>
                        <a className="flex flex-col items-center justify-center gap-1 text-neutral-500 w-full hover:text-black" href="#">
                            <IoSettings className="text-2xl" />
                            <span className="text-xs font-medium">Settings</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default TestPage;
