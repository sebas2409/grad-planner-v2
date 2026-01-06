"use client";

import {ReactNode} from "react";
import {
    Bell,
    MessageSquare,
    HelpCircle,
    ChevronDown,
    Layout,
    Download,
    ArrowRightLeft,
    Pencil,
    Search,
    MinusCircle
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {motion, Variants} from "framer-motion";
import Header from "@/components/header/Header";

// --- INTERFACES & TYPES ---

interface StatItemProps {
    label: string;
    value: string | number;
    color?: string;
    bold?: boolean;
}

interface CourseCardProps {
    code: string;
    name: string;
    credits: string | number;
    colorVariant?: "blue" | "green"; // Restringimos a los colores que manejamos
    subLabel?: string;
}

interface SemesterColumnProps {
    title: string;
    status: string;
    credits: string | number;
    children: ReactNode; // Tipo correcto para elementos hijos en React
    statusColor?: string;
    index?: number;
}

interface ReqCourseItemProps {
    code: string;
    name: string;
    credits: string | number;
    status?: "completed" | "planned" | "unplanned"; // Opcional si no siempre se pasa
}

// --- CONFIGURACIÓN DE ANIMACIONES ---

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: {
            delayChildren: i * 0.3,
            staggerChildren: 0.1
        }
    })
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// --- SUB-COMPONENTES ---

const StatItem = ({label, value, color = "text-gray-700", bold = false}: StatItemProps) => (
    <div className="flex flex-col items-center leading-tight">
        <span className="text-[10px] text-gray-500 uppercase font-medium">{label}</span>
        <span className={`text-2xl ${bold ? "font-extrabold" : "font-medium"} ${color}`}>
      {value}
    </span>
    </div>
);

const CourseCard = ({code, name, credits, colorVariant = "blue", subLabel}: CourseCardProps) => {
    const bgClass = colorVariant === "blue" ? "bg-[#007da5]" : "bg-[#00C558]";

    return (
        <motion.div
            variants={itemVariants}
            className={`flex items-stretch justify-between rounded-sm ${bgClass} p-2 text-white shadow-sm mb-2 cursor-pointer hover:opacity-90 transition-opacity`}
        >
            <div className="flex items-start gap-2 overflow-hidden">
                <Pencil className="h-4 w-4 mt-1 opacity-70 shrink-0"/>
                <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-medium leading-tight truncate pr-1" title={name}>
            {name}
          </span>
                    <span className="text-[10px] font-bold opacity-90">{code}</span>
                    {subLabel && (
                        <span
                            className="mt-1 w-max rounded-[2px] bg-white/20 px-1 py-[1px] text-[8px] font-bold uppercase tracking-wide">
               {subLabel}
             </span>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-between items-end pl-2">
                <span className="text-sm font-bold">{credits}</span>
            </div>
        </motion.div>
    );
};

const SemesterColumn = ({
                            title,
                            status,
                            credits,
                            children,
                            statusColor = "text-green-600",
                            index = 0
                        }: SemesterColumnProps) => (
    <div className="flex flex-col h-full">
        <div className="flex items-end justify-between mb-2 border-b border-gray-200 pb-1">
            <h3 className="text-base font-semibold text-gray-700">{title}</h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
        {status}
      </span>
        </div>

        <motion.div
            className="flex-1 space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={index}
        >
            {children}
        </motion.div>

        <div className="mt-4 flex flex-col items-end border-t border-gray-100 pt-2">
            <div className="text-xs text-gray-500">Total Credits: <span
                className="text-xl font-light text-gray-800">{credits}</span></div>
            <div className="mt-2 flex items-center text-[10px] text-gray-400 gap-1 cursor-pointer hover:text-gray-600">
                Shift Semester <ArrowRightLeft className="h-3 w-3"/>
            </div>
        </div>
    </div>
);

const ReqCourseItem = ({code, name, credits, status}: ReqCourseItemProps) => (
    <div
        className="flex items-center justify-between bg-gray-100/80 rounded-md p-2 mb-2 border border-transparent hover:border-gray-300 transition-colors">
        <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-red-500">
                <MinusCircle className="h-5 w-5"/>
            </button>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700">{name}</span>
                <span className="text-xs text-gray-500 font-bold">{code}</span>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <a href="#" className="text-[10px] text-blue-500 hover:underline">View Details</a>
            <span className="font-semibold text-gray-700 text-sm">{credits}</span>
            <div className={`h-2 w-2 rounded-full ${status === 'completed' ? 'bg-blue-600' : 'bg-[#00C558]'}`}/>
        </div>
    </div>
);

// --- COMPONENTE PRINCIPAL ---

export default function PlanDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-800 pb-20">

            {/* Top Navigation Bar (Stats) */}
            <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Left: Buttons */}
                    <div className="flex items-center gap-6">
                        <Button
                            className="bg-gray-700 hover:bg-gray-800 text-white gap-2 h-9 font-bold uppercase tracking-wide text-xs">
                            <Layout className="h-4 w-4"/> My Plans
                        </Button>
                        <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
                            <button className="flex items-center gap-1 hover:text-black"><Bell
                                className="h-4 w-4"/> Alerts <ChevronDown className="h-3 w-3"/></button>
                            <button className="flex items-center gap-1 hover:text-black"><MessageSquare
                                className="h-4 w-4"/> Messages <ChevronDown className="h-3 w-3"/></button>
                            <button className="flex items-center gap-1 hover:text-black"><HelpCircle
                                className="h-4 w-4"/> Help
                            </button>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="flex items-center gap-6">
                        <div className="flex gap-6 border-r border-gray-200 pr-6">
                            <StatItem label="Completed" value="46.5" color="text-[#007da5]" bold/>
                            <StatItem label="In-Progress" value="13" color="text-[#007da5]" bold/>
                            <StatItem label="Planned" value="70" color="text-[#00C558]" bold/>
                            <StatItem label="Unplanned" value="0" color="text-gray-400" bold/>
                            <StatItem label="Total" value="129.5" color="text-black" bold/>
                        </div>
                        <button
                            className="text-[10px] font-bold text-gray-500 flex items-center gap-1 hover:text-black">
                            SEE DETAILS <ChevronDown className="h-3 w-3"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1400px] mx-auto px-4 py-6">

                {/* Page Header */}
                <div className="mb-6">
                    <h2 className="text-xs text-gray-500 font-medium">Plan Name</h2>
                    <div className="flex items-baseline gap-3">
                        <h1 className="text-3xl font-extrabold text-black">test</h1>
                        <span className="text-[#00C558] font-semibold text-sm">Declared Plan</span>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT COLUMN (Plan Schedule) */}
                    <div className="lg:col-span-8 space-y-4">

                        {/* Controls Header */}
                        <div
                            className="bg-gray-100/50 p-4 rounded-lg border border-gray-200 flex flex-wrap items-center justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-900">My Plan</h2>

                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wide">Credits per semester</span>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold text-gray-800">12 – 16 credit(s)</span>
                                    <a href="#" className="text-xs text-blue-500 underline">Edit</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
                                <button
                                    className="flex items-center gap-1 hover:text-black underline decoration-gray-400">
                                    Copy Planning
                                </button>
                                <button className="flex items-center gap-1 hover:text-black font-bold">
                                    <Download className="h-4 w-4"/> Download PDF
                                </button>
                            </div>
                        </div>

                        {/* Transferred Credits */}
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full px-4 py-3 flex items-center justify-between bg-blue-50/50 hover:bg-blue-50 text-blue-600 font-bold text-sm">
                                <span>Transferred Credits (46.5 Credits)</span>
                                <ChevronDown className="h-4 w-4"/>
                            </button>
                        </div>

                        {/* Main Semester View: Year 2026 */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-blue-600 font-bold text-sm">Year 2026 (Current)</h3>
                                <a href="#" className="text-xs text-blue-600 font-bold underline hover:no-underline">View
                                    Single Semester</a>
                                <ChevronDown className="h-4 w-4 text-gray-400 rotate-180"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                {/* Winter 2026 */}
                                <SemesterColumn title="Winter 2026" status="ON-TRACK" statusColor="text-gray-500"
                                                credits="13" index={0}>
                                    <CourseCard colorVariant="blue" name="Writing/Reasoning Foundation" code="ENG 150"
                                                credits="3"/>
                                    <CourseCard colorVariant="blue" name="Programming With Functions" code="CSE 111"
                                                credits="2"/>
                                    <CourseCard colorVariant="blue" name="Computer Systems" code="ECEN 106"
                                                credits="2"/>
                                    <CourseCard colorVariant="blue" name="Web Fundamentals" code="WDD 130" credits="2"/>
                                    <CourseCard colorVariant="blue" name="Technical Teamwork" code="CSE 170"
                                                credits="2"/>
                                    <CourseCard colorVariant="blue" name="Programming With Classes" code="CSE 210"
                                                credits="2"/>
                                </SemesterColumn>

                                {/* Spring 2026 */}
                                <SemesterColumn title="Spring 2026" status="ON-TRACK" credits="12" index={1}>
                                    <CourseCard colorVariant="green" name="Introduction To Sociology" code="SOC 111"
                                                credits="3"/>
                                    <CourseCard colorVariant="green" name="Introduction To Robotics" code="GESCI 208"
                                                credits="3"/>
                                    <CourseCard colorVariant="green" name="Dynamic Web Fundamentals" code="WDD 131"
                                                credits="2"/>
                                    <CourseCard colorVariant="green" name="Freshman Discovery Project" code="CSE 199R"
                                                credits="1" subLabel="Variable Credit"/>
                                    <CourseCard colorVariant="green" name="SQL" code="ITM 220" credits="3"/>
                                </SemesterColumn>

                                {/* Fall 2026 */}
                                <SemesterColumn title="Fall 2026" status="FLEX TRACK" credits="3" index={2}>
                                    <CourseCard colorVariant="green" name="Foundations Of Restoration" code="REL 225C"
                                                credits="2"/>
                                    <CourseCard colorVariant="green" name="Professional Readiness" code="CSE 300"
                                                credits="1"/>
                                </SemesterColumn>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Requirements) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-5 rounded-lg border border-gray-200 h-full">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements & Courses</h2>

                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
                                <Input placeholder="Find Courses..." className="pl-9 bg-gray-50 border-gray-200"/>
                                <a href="#" className="absolute right-0 -top-6 text-[10px] text-gray-500 underline">View
                                    Course Availability</a>
                            </div>

                            <div className="flex mb-6 border-b border-gray-200">
                                <div
                                    className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 cursor-pointer">General
                                    Ed...
                                </div>
                                <div
                                    className="px-4 py-2 text-sm font-bold text-white bg-gray-600 rounded-t-sm cursor-pointer">Degree
                                </div>
                                <div
                                    className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 cursor-pointer">Electives
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 px-1">
                                <span
                                    className="text-xs font-bold text-blue-600 border-b-2 border-blue-600 pb-0.5 cursor-pointer">Cornerstone Requirement</span>
                                <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Eternal Truths</span>
                                <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">First Semester</span>
                                <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Quantitative Reasoning</span>
                                <span
                                    className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Writing</span>
                                <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Breadth Courses 1</span>
                                <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">Breadth Courses 2</span>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="font-bold text-gray-700">Cornerstone Requirement</h3>
                                    <div className="text-center leading-none">
                                        <span className="block text-xl font-bold text-gray-800">8</span>
                                        <span className="text-[9px] text-gray-400 uppercase">Total</span>
                                    </div>
                                </div>
                                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex mb-2">
                                    <div className="h-full bg-[#00C558] w-full"/>
                                </div>
                                <div className="flex gap-3 text-[10px] text-gray-500 font-medium">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2.5 h-2.5 bg-[#007da5] rounded-sm"></div>
                                        Completed
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2.5 h-2.5 bg-[#00C558] rounded-sm"></div>
                                        Planned/Enrolled
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div
                                            className="w-2.5 h-2.5 border border-dashed border-gray-400 rounded-sm"></div>
                                        Unplanned
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-gray-800 mb-2">Cornerstone Requirements</h3>
                                <p className="text-xs font-bold text-gray-800 mb-3">Take these courses:</p>

                                <div className="space-y-2">
                                    <ReqCourseItem name="The Eternal Family" code="REL 200C" credits="2"/>
                                    <ReqCourseItem name="Foundations Of Restor..." code="REL 225C" credits="2"/>
                                    <ReqCourseItem name="Jesus Christ Evrlst Gosp..." code="REL 250C" credits="2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}