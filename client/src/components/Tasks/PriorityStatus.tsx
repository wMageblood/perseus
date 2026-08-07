import type { Priority } from "../../types/task";

export interface PriorityStatusProps {
  priority: Priority
};

const priorityStyles: Record<Priority, string> = {
  High: "bg-[#331B1F] text-[#F38B8B] border-[#5E2B33]",
  Medium: "bg-[#2E2618] text-[#E3C57A] border-[#5A4A2A]",
  Low: "bg-[#1A2B22] text-[#7FD6A3] border-[#29503A]"
};

export const PriorityStatus = ({priority}: PriorityStatusProps) => {
  return (
    <p className={`font-semibold rounded-full text-center w-fit px-2 text-sm border cursor-default ${priorityStyles[priority]}`}>
      {priority}
    </p>
  )
};