import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ReqCourseItem, ReqCourseItemProps } from "./ReqCourseItem";
import { useState } from "react";

interface RequirementCategory {
    name: string;
    active: boolean;
}

interface RequirementProgress {
    completed: number;
    planned: number;
    total: number;
}

interface RequirementsPanelProps {
    categories: RequirementCategory[];
    activeCategory?: string;
    progress: RequirementProgress;
    courses: ReqCourseItemProps[];
    onCategoryChange?: (category: string) => void;
    onSearch?: (query: string) => void;
}

export function RequirementsPanel({ 
    categories, 
    activeCategory = "Cornerstone Requirement",
    progress,
    courses,
    onCategoryChange,
    onSearch 
}: RequirementsPanelProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const completedPercentage = (progress.completed / progress.total) * 100;
    const plannedPercentage = (progress.planned / progress.total) * 100;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        onSearch?.(e.target.value);
    };

    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements & Courses</h2>

            {/* Search */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                    placeholder="Find Courses..." 
                    className="pl-9 bg-gray-50 border-gray-200"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <a href="#" className="absolute right-0 -top-6 text-[10px] text-gray-500 underline">
                    View Course Availability
                </a>
            </div>

            {/* Tabs */}
            <div className="flex mb-6 border-b border-gray-200">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 cursor-pointer">
                    General Ed...
                </div>
                <div className="px-4 py-2 text-sm font-bold text-white bg-gray-600 rounded-t-sm cursor-pointer">
                    Degree
                </div>
                <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 cursor-pointer">
                    Electives
                </div>
            </div>

            {/* Category Breadcrumbs */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 px-1">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => onCategoryChange?.(category.name)}
                        className={`text-xs ${
                            category.active 
                                ? "font-bold text-blue-600 border-b-2 border-blue-600 pb-0.5" 
                                : "text-gray-400 hover:text-gray-600"
                        } cursor-pointer`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Progress Section */}
            <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                    <h3 className="font-bold text-gray-700">{activeCategory}</h3>
                    <div className="text-center leading-none">
                        <span className="block text-xl font-bold text-gray-800">{progress.total}</span>
                        <span className="text-[9px] text-gray-400 uppercase">Total</span>
                    </div>
                </div>
                
                {/* Custom Progress Bar */}
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex mb-2">
                    {progress.completed > 0 && (
                        <div 
                            className="h-full bg-[#007da5]" 
                            style={{ width: `${completedPercentage}%` }}
                        />
                    )}
                    {progress.planned > 0 && (
                        <div 
                            className="h-full bg-[#00C558]" 
                            style={{ width: `${plannedPercentage}%` }}
                        />
                    )}
                </div>
                
                {/* Legend */}
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
                        <div className="w-2.5 h-2.5 border border-dashed border-gray-400 rounded-sm"></div>
                        Unplanned
                    </div>
                </div>
            </div>

            {/* Requirements List */}
            <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Cornerstone Requirements</h3>
                <p className="text-xs font-bold text-gray-800 mb-3">Take these courses:</p>

                <div className="space-y-2">
                    {courses.map((course, idx) => (
                        <ReqCourseItem key={`${course.code}-${idx}`} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
