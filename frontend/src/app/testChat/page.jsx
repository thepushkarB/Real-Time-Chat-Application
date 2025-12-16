"use client";
import React from "react";

const TestChatPage = () => {
    const [quickActionState, setQuickActionState] = React.useState('closed');
    const [selectedDriverManager, setSelectedDriverManager] = React.useState(null);
    const [systemMessages, setSystemMessages] = React.useState([]);
    // constant for Demo
    const currentStep = 1;

    // Mock data
    const driverManagers = [
        { id: 1, name: 'John D', status: 'available', color: 'green' },
        { id: 2, name: 'Sarah K', status: 'busy', color: 'yellow' },
        { id: 3, name: 'Mike R', status: 'offline', color: 'red' }
    ];

    const handleAddDriverManager = async () => {
        if (!selectedDriverManager) return;

        // Simulate API call
        // In a real app: await fetch(`/api/chats/${chatId}/add-member`, ...)

        setTimeout(() => {
            // Success response
            const newMsg = {
                id: Date.now(),
                type: 'system',
                text: `${selectedDriverManager.name} was added to the group by Receptionist`,
                user: selectedDriverManager.name,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setSystemMessages(prev => [...prev, newMsg]);
            setQuickActionState('closed');
            setSelectedDriverManager(null);
        }, 500);
    };

    return (
        <div>
            <h1>Test Chat Page</h1>
            <div className="relative flex h-screen min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-black overflow-hidden shadow-sm">
                            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200 dark:border-neutral-800 px-6 py-4">
                                <div className="flex items-center gap-4 text-primary dark:text-white">
                                    <div className="size-6">
                                        <span className="material-symbols-outlined text-2xl">directions_car</span>
                                    </div>
                                    <h2 className="text-primary dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Audi A4 - B7654</h2>
                                </div>
                                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-background-light dark:bg-background-dark text-primary dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
                                    <span className="material-symbols-outlined text-xl">info</span>
                                </button>
                            </header>
                            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                                {/* Summary Conversation Bubble */}
                                {currentStep === 1 && (
                                    <SummaryConversationBubble
                                        step={1}
                                        currentTask="Assign Driver Manager"
                                        availableMembers={driverManagers}
                                        onSubmit={handleAddDriverManager}
                                        quickActionState={quickActionState}
                                        onStateChange={setQuickActionState}
                                        selectedMember={selectedDriverManager}
                                        onSelectMember={setSelectedDriverManager}
                                    />
                                )}

                                <div className="flex items-end gap-3 p-2">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" data-alt="Customer avatar with initial 'C'" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6E_JKNGu9y_UMTKc6f0T8PU-mgElVbiiWcbgINWNUUp-NuE27YhWVW6jPWayxRmDzF7L7CbjKdqfRDyj7JeL3rASmoNa9pccC_n0_Ds1rUBmlkcKhA1Y68w_ZfWuHebEDVAnrIalBZUmrJ45WLEYMXfOKgW3NRS1F1sJy7Ifvu95snygUdyaQzlILai5vIv973fJDvdzNwG4flsH4X39hcUHW5b9BO3QjG1b9GYYEkRIjyEBdmu8vxy2OVQfGya_vQTMI51AWgwM")' }}></div>
                                    <div className="flex flex-col gap-1 items-start">
                                        <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium px-1">Customer <span className="text-neutral-400 dark:text-neutral-500 font-normal">· 11:45 AM</span></p>
                                        <p className="text-base font-normal leading-normal flex max-w-[420px] rounded-lg px-4 py-3 bg-neutral-100 dark:bg-neutral-900 text-primary dark:text-neutral-50">
                                            Hi, I'm dropping off my car for its annual service. Is it possible to get a loaner car?
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 p-2 justify-end">
                                    <div className="flex flex-col gap-1 items-end">
                                        <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium px-1">You <span className="text-neutral-400 dark:text-neutral-500 font-normal">· 11:46 AM</span></p>
                                        <p className="text-base font-normal leading-normal flex max-w-[420px] rounded-lg px-4 py-3 bg-primary dark:bg-primary text-white dark:text-white">
                                            Good morning! Yes, we have a loaner car available for you. We'll have it ready when you arrive.
                                        </p>
                                    </div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" data-alt="Receptionist avatar with initial 'R'" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAATW7yaCUEg9dT_q5f0qiQg5ldFtMgmQpCPjA_mfonNaDrtYEKe0pA3OKmyT21xETGrkj-UU4mfbLdanb4xDqj5xFrF0gV7JkJ-8hz280UAGho4MR26ETeMYB42lBN3eATbeggu0GFVfAR55GZCt_CuaRtEzP0qp0prEm46CC7Uurd47Zt_pCubzyNjlIBKUV01W4yHX0vayAtDd_QEdXOg-rwN0k7rkB7HsU-oNK7Nzp9Xu_Uv7ot9bgZtaZYakoaopd5K8BrS54")' }}></div>
                                </div>
                                <div className="flex items-end gap-3 p-2">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" data-alt="Customer avatar with initial 'C'" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDeNyVV-HLUqqmA6NWI3GKKgEAJhpm3W-x6fl_-Ltq1D-qt_zSRl64VaxBB6qLtQ43lXXHmgwqDQ6XzUptCeIucQU5od1toSLSo-bSn26y7zRnugFSGiFNAXFgG3CMLSMTa1GCkOGg9UDYNXOq7Sqh89qAAupB_zfdiBaeJKgDSq9bN_IhlGUMvs0Z6k3C-RxkO6o3xzvErzEy5EOhQ_2YIIcx_pRhu2faFLNe6XPcmIdsmRO13IhWB59vq_ynCrUx1nQPusHShkk")' }}></div>
                                    <div className="flex flex-col gap-1 items-start">
                                        <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium px-1">Customer <span className="text-neutral-400 dark:text-neutral-500 font-normal">· 11:47 AM</span></p>
                                        <p className="text-base font-normal leading-normal flex max-w-[420px] rounded-lg px-4 py-3 bg-neutral-100 dark:bg-neutral-900 text-primary dark:text-neutral-50">
                                            Perfect, thank you! I should be there in about 20 minutes.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-3 p-2 justify-end">
                                    <div className="flex flex-col gap-1 items-end">
                                        <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium px-1">You <span className="text-neutral-400 dark:text-neutral-500 font-normal">· 11:48 AM</span></p>
                                        <div className="group relative">
                                            <p className="text-base font-normal leading-normal flex max-w-[420px] rounded-lg px-4 py-3 bg-primary dark:bg-primary text-white dark:text-white">
                                                Great, see you then!
                                            </p>
                                            <div className="absolute -left-5 bottom-1 flex items-center">
                                                <span className="material-symbols-outlined !text-base text-blue-400" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" data-alt="Receptionist avatar with initial 'R'" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDT6T8gYurgxoUyJAoSD3aGV8LAVjuMbE0BI_MMjRGd0sdkudgRdwFbwW_62Vc9jMEzO9jAF8iITIG9ULtinsx2lPP-q6op52PzL0Bu-OJP_ia2wXyPmDktmIRVm7VhqdcBcCmguHhKhTZONwUcYEJ7zfqY5rf8KS0pp85sCg9EaWlNwzBLGPMsPF_Lq_1at0NyFu83DjVKlqdOh9-zvTdv25t_G6qqHYuMn7YCjHEIEDu3WNzZKba34f6qN0Ld3B-2MMLFyHz0hLo")' }}></div>
                                </div>

                                {/* Dynamic System Messages */}
                                {systemMessages.map((msg) => (
                                    <div key={msg.id} className="flex justify-center my-4">
                                        <div className="bg-orange-50 dark:bg-neutral-900 border border-orange-100 dark:border-neutral-800 rounded-lg px-3 py-1 text-xs text-neutral-500 flex items-center gap-2 shadow-sm">
                                            <span>* {msg.text} *</span>
                                        </div>
                                    </div>
                                ))}

                            </main>
                            <footer className="border-t border-solid border-neutral-200 dark:border-neutral-800">
                                <div className="flex items-center px-4 py-3 gap-3 @container">
                                    <label className="flex flex-col min-w-40 h-12 flex-1">
                                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                            <div className="flex border-none bg-neutral-100 dark:bg-neutral-900 items-center justify-center pl-4 rounded-l-lg border-r-0 !pl-2">
                                                <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                                                    <span className="material-symbols-outlined text-neutral-500 dark:text-neutral-400">attach_file</span>
                                                </button>
                                            </div>
                                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-primary dark:text-neutral-50 focus:outline-0 focus:ring-0 border-none bg-neutral-100 dark:bg-neutral-900 focus:border-none h-full placeholder:text-neutral-500 dark:placeholder:text-neutral-400 px-2 text-base font-normal leading-normal" placeholder="Type a message..." defaultValue="" />
                                            <div className="flex border-none bg-neutral-100 dark:bg-neutral-900 items-center justify-center pr-4 rounded-r-lg border-l-0 !pr-2">
                                            </div>
                                        </div>
                                    </label>
                                    <button className="min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-sm font-medium leading-normal gap-2">
                                        <span className="truncate hidden sm:block">Send</span>
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const SummaryConversationBubble = ({
    step,
    currentTask,
    availableMembers,
    onSubmit,
    quickActionState,
    onStateChange,
    selectedMember,
    onSelectMember
}) => {

    // Quick Action Handler
    const handleQuickActionClick = () => {
        if (quickActionState === 'closed') {
            onStateChange('dropdown');
        } else {
            onStateChange('closed');
        }
    };

    const handleSelectMember = (member) => {
        onSelectMember(member);
        onStateChange('selected');
    };

    return (
        <div
            className="mx-auto w-full max-w-[400px] my-2 bg-[#f8f9fa] dark:bg-neutral-900 border-l-4 border-[#007AFF] rounded-xl shadow-sm overflow-hidden"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
            {/* Header */}
            <div className="px-4 py-3 border-b border-neutral-100 dark:border-neutral-800">
                <p className="text-[#007AFF] font-bold text-sm">📋 Current Progress: Step {step}/4</p>
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-black dark:text-white font-medium mb-4">
                    Receptionist: {currentTask}
                </p>

                {/* State Machine UI */}
                {quickActionState === 'closed' && (
                    <button
                        onClick={handleQuickActionClick}
                        className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                        {currentTask}
                        <span className="text-xs">▼</span>
                    </button>
                )}

                {quickActionState === 'dropdown' && (
                    <div className="flex flex-col gap-2 animate-in fade-in zoom-in duration-200">
                        <p className="text-xs text-neutral-500 mb-1">Available Driver Managers:</p>
                        {availableMembers.map(member => (
                            <button
                                key={member.id}
                                onClick={() => handleSelectMember(member)}
                                className="flex items-center justify-between w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-[#007AFF] transition-all group"
                            >
                                <span className="text-sm font-medium">{member.name}</span>
                                <span className={`
                                    text-[10px] px-2 py-0.5 rounded-full border uppercase tracking-wide font-semibold
                                    ${member.status === 'available' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                                    ${member.status === 'busy' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : ''}
                                    ${member.status === 'offline' ? 'bg-red-100 text-red-800 border-red-200' : ''}
                                `}>
                                    {member.status}
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {quickActionState === 'selected' && selectedMember && (
                    <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-lg">
                            <span className="text-sm font-medium text-green-800 dark:text-green-400">Selected: {selectedMember.name}</span>
                            <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    onStateChange('closed');
                                    onSelectMember(null);
                                }}
                                className="flex-1 px-4 py-2 text-sm font-medium text-black bg-white border border-black rounded-[20px] hover:bg-neutral-50"
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={onSubmit}
                                className="flex-1 px-4 py-2 text-sm font-bold text-white bg-[#007AFF] rounded-[20px] hover:bg-[#005BBB] flex items-center justify-center gap-1"
                            >
                                SUBMIT <span className="text-xs">→</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestChatPage;


