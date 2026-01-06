import { ChevronDown } from "lucide-react";
import { SemesterColumn } from "./SemesterColumn";
import { CourseCard, CourseCardProps } from "./CourseCard";
import { ReactNode } from "react";

export interface Semester {
    title: string;
    status: string;
    statusColor?: string;
    credits: number;
    courses: CourseCardProps[];
}

interface YearViewProps {
    year: number;
    isCurrent?: boolean;
    isExpanded?: boolean;
    semesters?: Semester[];
    onToggle?: () => void;
    onViewSingleSemester?: () => void;
}

export function YearView({ 
    year, 
    isCurrent = false, 
    isExpanded = false,
    semesters = [],
    onToggle,
    onViewSingleSemester 
}: YearViewProps) {
    if (!isExpanded) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg p-4">
                <button 
                    onClick={onToggle}
                    className="flex items-center justify-between w-full text-left"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-blue-600 font-semibold">
                            Year {year}{isCurrent ? " (Current)" : ""}
                        </span>
                        <span className="text-blue-600 text-sm">View Single Semester</span>
                    </div>
                    <ChevronDown className="h-5 w-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg">
            <button 
                onClick={onToggle}
                className="flex items-center justify-between w-full text-left p-4 border-b"
            >
                <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-bold text-sm">
                        Year {year}{isCurrent ? " (Current)" : ""}
                    </span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewSingleSemester?.();
                        }}
                        className="text-xs text-blue-600 font-bold underline hover:no-underline"
                    >
                        View Single Semester
                    </button>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 rotate-180" />
            </button>
            
            <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {semesters.map((semester, idx) => (
                        <SemesterColumn
                            key={idx}
                            title={semester.title}
                            status={semester.status}
                            statusColor={semester.statusColor}
                            credits={semester.credits}
                        >
                            {semester.courses.map((course, courseIdx) => (
                                <CourseCard key={`${course.code}-${courseIdx}`} {...course} />
                            ))}
                        </SemesterColumn>
                    ))}
                </div>
            </div>
        </div>
    );
}
