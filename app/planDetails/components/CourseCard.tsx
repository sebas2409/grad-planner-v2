import { Pencil } from "lucide-react";

export interface CourseCardProps {
    code: string;
    name: string;
    credits: number;
    colorVariant?: "blue" | "green";
    subLabel?: string;
    onClick?: () => void;
}

export function CourseCard({ 
    code, 
    name, 
    credits, 
    colorVariant = "blue", 
    subLabel,
    onClick 
}: CourseCardProps) {
    const bgClass = colorVariant === "blue" ? "bg-[#007da5]" : "bg-[#00C558]";

    return (
        <div
            onClick={onClick}
            className={`flex items-stretch justify-between rounded-sm ${bgClass} p-2 text-white shadow-sm mb-2 cursor-pointer hover:opacity-90 transition-opacity`}
        >
            <div className="flex items-start gap-2 overflow-hidden">
                <Pencil className="h-4 w-4 mt-1 opacity-70 shrink-0" />
                <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-medium leading-tight truncate pr-1" title={name}>
                        {name}
                    </span>
                    <span className="text-[10px] font-bold opacity-90">{code}</span>
                    {subLabel && (
                        <span className="mt-1 w-max rounded-[2px] bg-white/20 px-1 py-[1px] text-[8px] font-bold uppercase tracking-wide">
                            {subLabel}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-between items-end pl-2">
                <span className="text-sm font-bold">{credits}</span>
            </div>
        </div>
    );
}
