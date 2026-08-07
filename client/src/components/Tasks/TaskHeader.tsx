import { ChevronDownCircle } from "lucide-react";

export const TaskHeader = () => {
  return (
      <div className="ml-5 mt-10 *:font-Mona bg-white dark:bg-[#131519] *:font-semibold p-3 dark:border dark:border-[#22252C] rounded-md">
        <div className="grid grid-cols-[4fr_1fr_1fr_1fr_1fr_40px]">
            <p className="text-black text-md dark:text-[#F3F4F6]">Task</p>
            <p className="text-black text-md dark:text-[#F3F4F6]">Assigned to</p>
            <p className="text-black text-md dark:text-[#F3F4F6]">Priority</p>
            <p className="text-black text-md dark:text-[#F3F4F6]">Status</p>
            <p className="text-black text-md dark:text-[#F3F4F6]">Due Date</p>
            <ChevronDownCircle className="text-[#F3F4F6]" />
        </div>
      </div>
  )
};
