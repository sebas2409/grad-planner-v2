"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/header/Header";
import {
    PlanStatsBar,
    PlanHeader,
    PlanControls,
    RequirementsPanel,
    YearView,
    CourseCard,
    SemesterColumn,
    type PlanStats,
    type Semester,
} from "./components";

export default function PlanDetailsPage() {
    const [expandedYear, setExpandedYear] = useState<number | null>(2026);

    // Plan statistics
    const planStats: PlanStats = {
        completed: 46.5,
        inProgress: 13,
        planned: 70,
        unplanned: 0,
        total: 129.5,
    };

    // Semesters data for 2026
    const semesters2026: Semester[] = [
        {
            title: "Winter 2026",
            status: "ON-TRACK",
            statusColor: "text-gray-500",
            credits: 13,
            courses: [
                { code: "ENG 150", name: "Writing/Reasoning Foundation", credits: 3, colorVariant: "blue" },
                { code: "CSE 111", name: "Programming With Functions", credits: 2, colorVariant: "blue" },
                { code: "ECEN 106", name: "Computer Systems", credits: 2, colorVariant: "blue" },
                { code: "WDD 130", name: "Web Fundamentals", credits: 2, colorVariant: "blue" },
                { code: "CSE 170", name: "Technical Teamwork", credits: 2, colorVariant: "blue" },
                { code: "CSE 210", name: "Programming With Classes", credits: 2, colorVariant: "blue" },
            ],
        },
        {
            title: "Spring 2026",
            status: "ON-TRACK",
            statusColor: "text-green-600",
            credits: 12,
            courses: [
                { code: "SOC 111", name: "Introduction To Sociology", credits: 3, colorVariant: "green" },
                { code: "GESCI 208", name: "Introduction To Robotics", credits: 3, colorVariant: "green" },
                { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, colorVariant: "green" },
                { code: "CSE 199R", name: "Freshman Discovery Project", credits: 1, colorVariant: "green", subLabel: "Variable Credit" },
                { code: "ITM 220", name: "SQL", credits: 3, colorVariant: "green" },
            ],
        },
        {
            title: "Fall 2026",
            status: "FLEX TRACK",
            statusColor: "text-gray-500",
            credits: 3,
            courses: [
                { code: "REL 225C", name: "Foundations Of Restoration", credits: 2, colorVariant: "green" },
                { code: "CSE 300", name: "Professional Readiness", credits: 1, colorVariant: "green" },
            ],
        },
    ];

    // Requirements data
    const requirementCategories = [
        { name: "Cornerstone Requirement", active: true },
        { name: "Eternal Truths", active: false },
        { name: "First Semester", active: false },
        { name: "Quantitative Reasoning", active: false },
        { name: "Writing", active: false },
        { name: "Breadth Courses 1", active: false },
        { name: "Breadth Courses 2", active: false },
    ];

    const requirementCourses = [
        { code: "REL 200C", name: "The Eternal Family", credits: 2, status: "completed" as const },
        { code: "REL 225C", name: "Foundations Of Restor...", credits: 2, status: "planned" as const },
        { code: "REL 250C", name: "Jesus Christ Evrlst Gosp...", credits: 2, status: "planned" as const },
    ];

    const toggleYear = (year: number) => {
        setExpandedYear(expandedYear === year ? null : year);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-800 pb-20">

            {/* Top Navigation Bar with Stats */}
            <PlanStatsBar 
                stats={planStats}
                onMyPlansClick={() => console.log("Navigate to My Plans")}
                onSeeDetailsClick={() => console.log("Show details")}
            />

            {/* Main Content Area */}
            <div className="max-w-350 mx-auto px-4 py-6">
                {/* Page Header */}
                <PlanHeader planName="test" status="Declared Plan" />

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* LEFT COLUMN (Plan Schedule) - Spans 8 cols */}
                    <div className="lg:col-span-8 space-y-4">
                        {/* Controls Header */}
                        <PlanControls
                            minCredits={12}
                            maxCredits={16}
                            onEditCredits={() => console.log("Edit credits")}
                            onCopyPlanning={() => console.log("Copy planning")}
                            onDownloadPDF={() => console.log("Download PDF")}
                        />

                        {/* Transferred Credits */}
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <button className="w-full px-4 py-3 flex items-center justify-between bg-blue-50/50 hover:bg-blue-50 text-blue-600 font-bold text-sm">
                                <span>Transferred Credits (46.5 Credits)</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Years: Previous Years (Collapsed) */}
                        {[2022, 2023, 2024, 2025].map((year) => (
                            <YearView
                                key={year}
                                year={year}
                                isExpanded={false}
                                onToggle={() => toggleYear(year)}
                            />
                        ))}

                        {/* Year 2026 (Current) - Expanded */}
                        <YearView
                            year={2026}
                            isCurrent
                            isExpanded={expandedYear === 2026}
                            semesters={semesters2026}
                            onToggle={() => toggleYear(2026)}
                            onViewSingleSemester={() => console.log("View single semester")}
                        />
                    </div>

                    {/* RIGHT COLUMN (Requirements) */}
                    <div className="lg:col-span-4 space-y-6">
                        <RequirementsPanel
                            categories={requirementCategories}
                            progress={{ completed: 0, planned: 8, total: 8 }}
                            courses={requirementCourses}
                            onCategoryChange={(category) => console.log("Category changed:", category)}
                            onSearch={(query) => console.log("Search:", query)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}