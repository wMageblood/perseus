import type { TaskStatus as Status } from "../../types/task";

export interface TaskStatusProps {
  status: Status
};

const statusStyles: Record<Status, string> = {
  Completed: "bg-[#18251F] text-[#7FD6A3] border border-[#29503A]",
  "In progress": "bg-[#1A2333] text-[#89B4FA] border border-[#31415F]",
  Pending: "bg-[#1B1D21] text-[#B5BBC5] border border-[#32363D]"
};

export const TaskStatus = ({status}: TaskStatusProps) => {
  return (
    <p className={`font-semibold rounded-full text-center w-fit px-2 text-sm border cursor-default ${statusStyles[status]}`}>
      {status}
    </p>
  )
};