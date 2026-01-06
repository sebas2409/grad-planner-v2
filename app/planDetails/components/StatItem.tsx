interface StatItemProps {
    label: string;
    value: string | number;
    color?: string;
    bold?: boolean;
}

export function StatItem({ label, value, color = "text-gray-700", bold = false }: StatItemProps) {
    return (
        <div className="flex flex-col items-center leading-tight">
            <span className="text-[10px] text-gray-500 uppercase font-medium">{label}</span>
            <span className={`text-2xl ${bold ? "font-extrabold" : "font-medium"} ${color}`}>
                {value}
            </span>
        </div>
    );
}
