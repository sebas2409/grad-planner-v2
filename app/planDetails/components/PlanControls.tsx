import { Download } from "lucide-react";

interface PlanControlsProps {
    minCredits: number;
    maxCredits: number;
    onEditCredits?: () => void;
    onCopyPlanning?: () => void;
    onDownloadPDF?: () => void;
}

export function PlanControls({ 
    minCredits, 
    maxCredits, 
    onEditCredits, 
    onCopyPlanning, 
    onDownloadPDF 
}: PlanControlsProps) {
    return (
        <div className="bg-gray-100/50 p-4 rounded-lg border border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">My Plan</h2>

            <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wide">
                    Credits per semester
                </span>
                <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-800">
                        {minCredits} – {maxCredits} credit(s)
                    </span>
                    <button 
                        onClick={onEditCredits}
                        className="text-xs text-blue-500 underline"
                    >
                        Edit
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
                <button
                    onClick={onCopyPlanning}
                    className="flex items-center gap-1 hover:text-black underline decoration-gray-400"
                >
                    Copy Planning
                </button>
                <button 
                    onClick={onDownloadPDF}
                    className="flex items-center gap-1 hover:text-black font-bold"
                >
                    <Download className="h-4 w-4" /> Download PDF
                </button>
            </div>
        </div>
    );
}
