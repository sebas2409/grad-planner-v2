import { MinusCircle } from "lucide-react";

export interface ReqCourseItemProps {
    code: string;
    name: string;
    credits: number;
    status?: "completed" | "planned" | "unplanned";
    onRemove?: () => void;
    onViewDetails?: () => void;
}

export function ReqCourseItem({ 
    code, 
    name, 
    credits, 
    status = "planned",
    onRemove,
    onViewDetails 
}: ReqCourseItemProps) {
    const statusColor = status === "completed" ? "bg-blue-600" : "bg-[#00C558]";

    return (
        <div className="flex items-center justify-between bg-gray-100/80 rounded-md p-2 mb-2 border border-transparent hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-2">
                <button 
                    onClick={onRemove}
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove course"
                >
                    <MinusCircle className="h-5 w-5" />
                </button>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700">{name}</span>
                    <span className="text-xs text-gray-500 font-bold">{code}</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button 
                    onClick={onViewDetails}
                    className="text-[10px] text-blue-500 hover:underline"
                >
                    View Details
                </button>
                <span className="font-semibold text-gray-700 text-sm">{credits}</span>
                <div className={`h-2 w-2 rounded-full ${statusColor}`} />
            </div>
        </div>
    );
}
