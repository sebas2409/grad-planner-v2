interface PlanHeaderProps {
    planName: string;
    status: string;
    statusColor?: string;
}

export function PlanHeader({ planName, status, statusColor = "text-[#00C558]" }: PlanHeaderProps) {
    return (
        <div className="mb-6">
            <h2 className="text-xs text-gray-500 font-medium">Plan Name</h2>
            <div className="flex items-baseline gap-3">
                <h1 className="text-3xl font-extrabold text-black">{planName}</h1>
                <span className={`${statusColor} font-semibold text-sm`}>{status}</span>
            </div>
        </div>
    );
}
