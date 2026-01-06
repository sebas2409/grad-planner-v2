import { ArrowRightLeft } from "lucide-react";
import { ReactNode } from "react";

export interface SemesterColumnProps {
    title: string;
    status: string;
    credits: number;
    children: ReactNode;
    statusColor?: string;
    onShiftSemester?: () => void;
}

export function SemesterColumn({ 
    title, 
    status, 
    credits, 
    children, 
    statusColor = "text-green-600",
    onShiftSemester 
}: SemesterColumnProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-end justify-between mb-2 border-b border-gray-200 pb-1">
                <h3 className="text-base font-semibold text-gray-700">{title}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
                    {status}
                </span>
            </div>
            <div className="flex-1 space-y-1">
                {children}
            </div>
            <div className="mt-4 flex flex-col items-end border-t border-gray-100 pt-2">
                <div className="text-xs text-gray-500">
                    Total Credits: <span className="text-xl font-light text-gray-800">{credits}</span>
                </div>
                <button 
                    onClick={onShiftSemester}
                    className="mt-2 flex items-center text-[10px] text-gray-400 gap-1 cursor-pointer hover:text-gray-600"
                >
                    Shift Semester <ArrowRightLeft className="h-3 w-3" />
                </button>
            </div>
        </div>
    );
}
