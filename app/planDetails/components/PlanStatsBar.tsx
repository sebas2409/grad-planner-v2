import { Bell, MessageSquare, HelpCircle, ChevronDown, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatItem } from "./StatItem";

export interface PlanStats {
    completed: number;
    inProgress: number;
    planned: number;
    unplanned: number;
    total: number;
}

interface PlanStatsBarProps {
    stats: PlanStats;
    onMyPlansClick?: () => void;
    onSeeDetailsClick?: () => void;
}

export function PlanStatsBar({ stats, onMyPlansClick, onSeeDetailsClick }: PlanStatsBarProps) {
    return (
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
            <div className="max-w-350 mx-auto px-4 h-16 flex items-center justify-between">
                {/* Left: Buttons */}
                <div className="flex items-center gap-6">
                    <Button
                        onClick={onMyPlansClick}
                        className="bg-gray-700 hover:bg-gray-800 text-white gap-2 h-9 font-bold uppercase tracking-wide text-xs"
                    >
                        <Layout className="h-4 w-4" /> My Plans
                    </Button>
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
                        <button className="flex items-center gap-1 hover:text-black">
                            <Bell className="h-4 w-4" /> Alerts <ChevronDown className="h-3 w-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-black">
                            <MessageSquare className="h-4 w-4" /> Messages <ChevronDown className="h-3 w-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-black">
                            <HelpCircle className="h-4 w-4" /> Help
                        </button>
                    </div>
                </div>

                {/* Right: Stats */}
                <div className="flex items-center gap-6">
                    <div className="flex gap-6 border-r border-gray-200 pr-6">
                        <StatItem label="Completed" value={stats.completed} color="text-[#007da5]" bold />
                        <StatItem label="In-Progress" value={stats.inProgress} color="text-[#007da5]" bold />
                        <StatItem label="Planned" value={stats.planned} color="text-[#00C558]" bold />
                        <StatItem label="Unplanned" value={stats.unplanned} color="text-gray-400" bold />
                        <StatItem label="Total" value={stats.total} color="text-black" bold />
                    </div>
                    <button
                        onClick={onSeeDetailsClick}
                        className="text-[10px] font-bold text-gray-500 flex items-center gap-1 hover:text-black"
                    >
                        SEE DETAILS <ChevronDown className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </div>
    );
}
