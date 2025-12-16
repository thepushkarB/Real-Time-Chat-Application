"use client"
import React, { useRef, useEffect } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import { useRouter } from "next/navigation";
import Link from "next/link";


const nodes = [
    //? level 0: organisation
    // root node- no pid
    { id: 1, title: "Organisation", name: "Crystal Auto" },

    //? level 1: dealership
    // child node with pid
    { id: 10, pid: 1, title: "Dealership", name: "Crystal Kia" },
    { id: 11, pid: 1, title: "Dealership", name: "Crystal Hyundai" },

    //? Level 2: branches for Kia
    { id: 100, pid: 10, title: "Branch", name: "Shivaji Nagar" },
    { id: 101, pid: 10, title: "Branch", name: "Baner" },
    { id: 102, pid: 10, title: "Branch", name: "Hinjewadi Phase 1" },
    // Level 2: branches for Hyundai
    { id: 110, pid: 11, title: "Branch", name: "Wakad" },
    { id: 111, pid: 11, title: "Branch", name: "Pimple Saudagar" },

    //? Level 3: Function
    // Shivaji Nagar branch
    { id: 200, pid: 100, title: "Function", name: "Service Workshop" },
    { id: 201, pid: 100, title: "Function", name: "Parts & Inventory" },
    { id: 202, pid: 100, title: "Function", name: "Customer Experience" },
    { id: 203, pid: 100, title: "Function", name: "Accounts & Billing" },
    { id: 204, pid: 100, title: "Function", name: "Sales & Delivery" },
    { id: 205, pid: 100, title: "Function", name: "Quality & Inspection" },
    { id: 206, pid: 100, title: "Function", name: "Admin & Operations" },
    { id: 207, pid: 100, title: "Function", name: "IT & Digital" },
    // level 3 - Wakad branch
    { id: 210, pid: 110, title: "Function", name: "Service Workshop" },
    { id: 211, pid: 110, title: "Function", name: "Parts & Inventory" },
    { id: 212, pid: 110, title: "Function", name: "Customer Experience" },
    { id: 213, pid: 110, title: "Function", name: "Accounts & Billing" },
    { id: 214, pid: 110, title: "Function", name: "Sales & Delivery" },
    { id: 215, pid: 110, title: "Function", name: "Quality & Inspection" },
    { id: 216, pid: 110, title: "Function", name: "Admin & Operations" },
    { id: 217, pid: 110, title: "Function", name: "IT & Digital" },


    //? Level 4: user/reposible person
    // Service Advisor 
    { id: 300, pid: 200, title: "Service Advisor", name: "Pushkar Bankar" },
    { id: 301, pid: 200, title: "Technician", name: "John Doe" },
    // Parts users
    { id: 310, pid: 201, title: "Parts Manager", name: "Sunita Kulkarni" },
    { id: 311, pid: 201, title: "Storekeeper", name: "Vikas Sharma" },
    // Accounts users
    { id: 320, pid: 203, title: "Accountant", name: "Ajay Patil" },
    { id: 321, pid: 203, title: "Billing Clerk", name: "Rita Desai" },
    // CX users
    { id: 330, pid: 202, title: "Reception", name: "Pooja Deshpande" },
    { id: 331, pid: 202, title: "CX Executive", name: "Aman Mehta" },
    // Sales & delivery
    { id: 340, pid: 204, title: "Sales Exec", name: "Suhash" },
    { id: 341, pid: 204, title: "Delivery Coordinator", name: "Subodh" },
    // Admin
    { id: 350, pid: 206, title: "Manager", name: "Branch Manager" },
    // IT
    { id: 360, pid: 207, title: "IT", name: "IT Admin" },
]

const OrgChartPage = () => {
    //? DOM container reference (persists across ALL renders) - holds ref to actual DOM
    // Initially null; after render, chartRef.current becomes the real DOM ele
    const chartRef = useRef(null);

    //? Chart INSTANCE reference (stores the OrgChart object itself)
    const chartInstance = useRef(null);

    const router = useRouter();

    useEffect(() => {
        // if (!chartRef.current) return;

        if (chartRef.current && typeof (window) !== 'undefined') {

            // Clear the container to prevent duplicates in Strict Mode
            chartRef.current.innerHTML = '';

            //? Define Custom Dark Template
            // clone the og template `ana` and assign it to `dark`
            // we mess w/ dark template to create our custom dark template but not the og template 'ana'
            OrgChart.templates.dark = Object.assign({}, OrgChart.templates.ana);
            OrgChart.templates.dark.size = [250, 100];

            //? Node: Black background (#000) with subtle border + Separator Line
            OrgChart.templates.dark.node = `
                <rect x="0" y="0" height="100" width="250" fill="#000000" stroke-width="1" stroke="#333333" rx="12" ry="12"></rect>
                <line x1="0" y1="40" x2="250" y2="40" stroke="#262626" stroke-width="1"></line>
            `;

            //? Text fields: Improved Distinction with Separator
            //? Title (field_1): Smaller, Uppercase, Gray, Top Section
            OrgChart.templates.dark.field_1 = '<text width="220" style="font-size: 16px; font-weight: 600; fill: #d9d9d9; letter-spacing: 1px;" x="125" y="25" text-anchor="middle" text-transform="uppercase">{val}</text>';

            //? Name (field_0): Larger, Bold, White, Bottom Section
            OrgChart.templates.dark.field_0 = '<text width="220" style="font-size: 20px; font-weight: 700; fill: #ffffff;" x="125" y="75" text-anchor="middle">{val}</text>';

            //? plus/minus styling
            OrgChart.templates.dark.plus = '<circle cx="15" cy="15" r="15" fill="#171717" stroke="#404040" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#a3a3a3"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#a3a3a3"></line>';
            OrgChart.templates.dark.minus = '<circle cx="15" cy="15" r="15" fill="#171717" stroke="#404040" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#a3a3a3"></line>';

            //? Initialize chart on DOM element - slower zoom/scroll for better UX
            OrgChart.scroll.smooth = 5;
            OrgChart.scroll.speed = 8;

            chartInstance.current = new OrgChart(chartRef.current, {
                nodes,
                template: 'dark',
                enableSearch: false,
                // Disable the toolbar (removes unnecessary buttons)
                toolbar: {
                    visible: false
                },
                // Collapse nodes deeper than level 2 by default
                collapse: {
                    level: 2,
                    allChildren: true
                },
                // Fit chart to container
                scaleInitial: 1,
                // Slower zoom for better control
                scaleMin: 0.3,
                scaleMax: 3,
                // zoom on scroll
                mouseScrool: OrgChart.action.zoom,
                // Disable scrollbars (cleaner look)
                showXScroll: OrgChart.scroll.none,
                showYScroll: OrgChart.scroll.none,
                nodeBinding: {
                    field_0: 'name',
                    field_1: 'title',
                    field_2: 'id'
                },
                pan: true,
                zoom: true,
                responsive: true,
                layout: OrgChart.layout.tree,
                orientation: OrgChart.orientation.top,
            })

            // Center on root (or any node) once at init
            // chartInstance.current.on('init', () => {
            //     chartInstance.current.center(1); // center node id 1
            // });

            // After every redraw, if the last action was expand/collapse, refit/center
            // chartInstance.current.onRedraw(() => {
            //     const action = chartInstance.current.manager.action;

            //     if (action === OrgChart.action.expand ||
            //         action === OrgChart.action.expandCollapse) {
            //         // Option A: center on the currently selected node
            //         const nodeId = chartInstance.current.selectionCtx.nodeId;
            //         if (nodeId != null) {
            //             chartInstance.current.center(nodeId);
            //         }
            //     }
            // });
            // chartInstance.current.on('expand', (sender, args) => {
            //     const nodeId = args && args.node && args.node.id;
            //     if (nodeId != null) {
            //         chartInstance.current.center(nodeId);
            //     }
            // });

            // chartInstance.current.on('collapse', (sender, args) => {
            //     const nodeId = args && args.node && args.node.id;
            //     if (nodeId != null) {
            //         chartInstance.current.center(nodeId);
            //     }
            // });


            // Use 'init' event to safely center on root node after chart is fully rendered
            chartInstance.current.on('init', function (sender) {
                try {
                    // Center on root node (id: 1) - ensures node exists and is positioned
                    if (sender && typeof sender.center === 'function') {
                        sender.center(1);
                    }
                } catch (error) {
                    console.log('OrgChart center error:', error);
                }
            });

        }

        // Destroy chart on unmount: Runs when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        }

    }, []);

    return (
        <div className="w-full h-full flex flex-col bg-neutral-100/95 rounded-xl overflow-hidden shadow-lg mb-6">
            {/* Header Section */}
            <header className="flex-none sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Link href="/admin" className="cursor-pointer hover:text-black transition-colors">Dashboard</Link>
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="text-black font-medium">Organization Chart</span>
                    </div>
                    {/* Controls hint */}
                    <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">mouse</span>
                            <span>Scroll to zoom</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">pan_tool</span>
                            <span>Drag to pan</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">touch_app</span>
                            <span>Click +/− to expand</span>
                        </div>
                    </div>
                </div>
            </header>
            <style jsx global>{`
                [data-n-id] path {
                    stroke: #404040 !important;
                }
                /* Force transparent background for the library's SVG/Container */
                #orgchart, #orgchart > svg, #orgchart div {
                    background-color: transparent !important;
                }
                /* Improve scrollbar styling */
                #orgchart::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                #orgchart::-webkit-scrollbar-thumb {
                    background-color: #a3a3a3;
                    border-radius: 4px;
                }
                #orgchart::-webkit-scrollbar-track {
                    background-color: #e5e5e5;
                }
            `}
            </style>
            {/* Chart container with proper flex sizing */}
            <div id="orgchart" ref={chartRef} className="flex-1 w-full min-h-0" />
        </div>
    );
}

export default OrgChartPage;







// "use client"
// import React, { useRef, useEffect } from "react";
// import OrgChart from "@balkangraph/orgchart.js";
// import { JpegEmbedder } from "pdf-lib";
// const nodes = [
//     //? level 0: organisation
//     // root node- no pid
//     { id: 1, title: "Organisation", name: "Crystal Auto" },

//     //? level 1: dealership
//     // child node with pid
//     { id: 10, pid: 1, title: "Dealership", name: "Crystal Kia" },
//     { id: 11, pid: 1, title: "Dealership", name: "Crystal Hyundai" },

//     //? Level 2: branches for Kia
//     { id: 100, pid: 10, title: "Branch", name: "Shivaji Nagar" },
//     { id: 101, pid: 10, title: "Branch", name: "Baner" },
//     { id: 102, pid: 10, title: "Branch", name: "Hinjewadi Phase 1" },
//     // Level 2: branches for Hyundai
//     { id: 110, pid: 11, title: "Branch", name: "Wakad" },
//     { id: 111, pid: 11, title: "Branch", name: "Pimple Saudagar" },

//     //? Level 3: Function
//     // Shivaji Nagar branch
//     { id: 200, pid: 100, title: "Function", name: "Service Workshop" },
//     { id: 201, pid: 100, title: "Function", name: "Parts & Inventory" },
//     { id: 202, pid: 100, title: "Function", name: "Customer Experience" },
//     { id: 203, pid: 100, title: "Function", name: "Accounts & Billing" },
//     { id: 204, pid: 100, title: "Function", name: "Sales & Delivery" },
//     { id: 205, pid: 100, title: "Function", name: "Quality & Inspection" },
//     { id: 206, pid: 100, title: "Function", name: "Admin & Operations" },
//     { id: 207, pid: 100, title: "Function", name: "IT & Digital" },
//     // level 3 - Wakad branch
//     { id: 210, pid: 110, title: "Function", name: "Service Workshop" },
//     { id: 211, pid: 110, title: "Function", name: "Parts & Inventory" },
//     { id: 212, pid: 110, title: "Function", name: "Customer Experience" },
//     { id: 213, pid: 110, title: "Function", name: "Accounts & Billing" },
//     { id: 214, pid: 110, title: "Function", name: "Sales & Delivery" },
//     { id: 215, pid: 110, title: "Function", name: "Quality & Inspection" },
//     { id: 216, pid: 110, title: "Function", name: "Admin & Operations" },
//     { id: 217, pid: 110, title: "Function", name: "IT & Digital" },


//     //? Level 4: user/reposible person
//     // Service Advisor 
//     { id: 300, pid: 200, title: "Service Advisor", name: "Pushkar Bankar" },
//     { id: 301, pid: 200, title: "Technician", name: "John Doe" },
//     // Parts users
//     { id: 310, pid: 201, title: "Parts Manager", name: "Sunita Kulkarni" },
//     { id: 311, pid: 201, title: "Storekeeper", name: "Vikas Sharma" },
//     // Accounts users
//     { id: 320, pid: 203, title: "Accountant", name: "Ajay Patil" },
//     { id: 321, pid: 203, title: "Billing Clerk", name: "Rita Desai" },
//     // CX users
//     { id: 330, pid: 202, title: "Reception", name: "Pooja Deshpande" },
//     { id: 331, pid: 202, title: "CX Executive", name: "Aman Mehta" },
//     // Sales & delivery
//     { id: 340, pid: 204, title: "Sales Exec", name: "Suhash" },
//     { id: 341, pid: 204, title: "Delivery Coordinator", name: "Subodh" },
//     // Admin
//     { id: 350, pid: 206, title: "Manager", name: "Branch Manager" },
//     // IT
//     { id: 360, pid: 207, title: "IT", name: "IT Admin" },
// ]
// const OrgChartPage = () => {
//     //? DOM container reference (persists across ALL renders) - holds ref to actual DOM
//     // Initially null; after render, chartRef.current becomes the real DOM ele
//     const chartRef = useRef(null);

//     //? stores the instance of OrgChart object - We store it in a ref because we want a stable place to call destroy() on unmount and to avoid triggering re-renders.
//     const chartInstance = useRef(null);

//     useEffect(() => {
//         if (!chartRef.current) return;

//         if (chartRef.current && typeof (window) !== 'undefined') {

//             //? Define Custom Dark Template
//             // clone the og template `ana` and assign it to `dark`
//             // we mess w/ dark template to create our custom dark template but not the og template 'ana'
//             OrgChart.templates.dark = Object.assign({}, OrgChart.templates.ana);
//             OrgChart.templates.dark.size = [250, 100];

//             // Node: Black background (#000) with subtle border + Separator Line
//             OrgChart.templates.dark.node = `
//                 <rect x="0" y="0" height="100" width="250" fill="#000000" stroke-width="1" stroke="#333333" rx="12" ry="12"></rect>
//                 <line x1="0" y1="40" x2="250" y2="40" stroke="#262626" stroke-width="1"></line>
//             `;

//             // Text fields: Improved Distinction with Separator
//             // Title (field_1): Smaller, Uppercase, Gray, Top Section
//             OrgChart.templates.dark.field_1 = '<text width="220" style="font-size: 16px; font-weight: 600; fill: #d9d9d9; letter-spacing: 1px;" x="125" y="25" text-anchor="middle" text-transform="uppercase">{val}</text>';

//             // Name (field_0): Larger, Bold, White, Bottom Section
//             OrgChart.templates.dark.field_0 = '<text width="220" style="font-size: 20px; font-weight: 700; fill: #ffffff;" x="125" y="75" text-anchor="middle">{val}</text>';

//             // Link styling
//             OrgChart.templates.dark.plus = '<circle cx="15" cy="15" r="15" fill="#171717" stroke="#404040" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#a3a3a3"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#a3a3a3"></line>';
//             OrgChart.templates.dark.minus = '<circle cx="15" cy="15" r="15" fill="#171717" stroke="#404040" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#a3a3a3"></line>';

//             // Clear the container to prevent duplicates in Strict Mode
//             chartRef.current.innerHTML = '';

//             //? Initialize chart on DOM element
//             OrgChart.scroll.smooth = 10;
//             OrgChart.scroll.speed = 20;

//             chartInstance.current = new OrgChart(chartRef.current, {
//                 nodes,
//                 // template: 'ana',
//                 template: 'dark', // Use custom dark template
//                 enableSearch: false,
//                 // Collapse nodes deeper than level 2 by default
//                 collapse: {
//                     level: 2,
//                     allChildren: true
//                 },
//                 // Fit chart to container initially
//                 scaleInitial: OrgChart.match.boundary,
//                 // Disable zoom on scroll, allow panning
//                 mouseScrool: OrgChart.action.scroll,
//                 // Enable scrollbars
//                 showXScroll: OrgChart.scroll.visible,
//                 // Enable vertical scrollbar
//                 showYScroll: OrgChart.scroll.visible,
//                 nodeBinding: {
//                     field_0: 'name',
//                     field_1: 'title',
//                     field_2: 'id'
//                 },
//                 // Improve navigation smoothness
//                 layout: OrgChart.layout.balanced, // Balanced layout often helps with expansion UX
//                 align: OrgChart.orientation.vertical,
//                 responsive: true,
//                 // layout: OrgChart.layout.tree,
//                 // orientation: OrgChart.orientation.vertical,
//             })

//             // Center chart properly after init
//             // Note: scaleInitial: OrgChart.match.boundary handles the initial fit, 
//             // so manual fit() is not needed and causes race conditions.
//         }

//         // Destroy chart on unmount
//         return () => {
//             if (chartInstance.current) {
//                 chartInstance.current.destroy();
//                 chartInstance.current = null;
//             }
//         }

//     }, []);

//     return (
//         <div className="w-full h-full bg-[#1c1c1c] rounded-lg overflow-hidden">
//             <style jsx global>{`
//                 [data-n-id] path {
//                     stroke: #404040 !important;
//                 }
//                 .balkan-orgchart-container, .balkan-orgchart-container svg {
//                     background-color: transparent !important;
//                 }
//             `}</style>
//             <div ref={chartRef} className="w-full h-full" />
//         </div>
//     );
// }
// export default OrgChartPage;