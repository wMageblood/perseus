import { ChevronDownCircle, UserRound } from "lucide-react";
import type { ITask } from "../../types/task";
import { PriorityStatus } from "./PriorityStatus";
import { TaskStatus } from "./TaskStatus";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CopyButton } from "../ui/CopyButton";

interface TaskRowProps {
  task: ITask
  onRequestDelete: ( id: string ) => void
  onRequestEdit: ( task: ITask ) => void
};

export const TaskRow = ({task, onRequestDelete, onRequestEdit}: TaskRowProps) => {

  const [ expanded, setExpanded ] = useState(false)

  const handleClick = () => setExpanded(!expanded);

  const {
    id,
    title,
    description,
    department,
    workspaceId,
    assignedTo,
    priority,
    status,
    dueDate,
    createdBy,
    createdAt,
    updatedAt,
  } = task;

  return (
      <div className={`hover:bg-[#181B20] ml-5 mt-1 transition-colors duration-300 *:font-Mona bg-white p-3 dark:border dark:border-[#22252C] rounded-md ${expanded === true ? "dark:bg-[#181B20] border-[#31415F]" : "dark:bg-[#131519]"}`}>
        <div onClick={handleClick} className="grid cursor-pointer grid-cols-[4fr_1fr_1fr_1fr_1fr_40px] items-center">
          <p className="text-sm font-semibold text-black dark:text-[#F3F4F6]">{title}</p>
          {assignedTo ? (
            <img
              src={assignedTo}
              className=" h-7 w-7 rounded-full ring-info select-none hover:ring-2"
            />
          ) : (
            <div className="flex h-7 w-7 items-center rounded-full bg-[#22262D]">
              <UserRound className="w-10 text-[#A1A1AA]" />
            </div>
          )}
          <PriorityStatus priority={priority}/>
          <TaskStatus status={status}/>
          <p className="text-sm text-black dark:text-[#F3F4F6]">{new Date(dueDate).toLocaleDateString()}</p>
          <ChevronDownCircle className={`${expanded === true ? "rotate-90" : null } dark:text-[#F3F4F6] transition-transform duration-300`} />
        </div>
      <AnimatePresence>
        { expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1 , height: "auto"}} transition={{duration: 0.2, ease: "easeOut"}} exit={{opacity: 0, height: 0}} className={`mt-6 pl-4 border-l border-l-[#C5A46D] overflow-hidden`}>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-black dark:text-[#C5A46D]">Description:</h1>
              <p className="text-sm whitespace-pre-wrap text-black dark:text-[#F3F4F6]">{description}</p>
            </div>
            <div className="mt-8 flex justify-between text-black dark:text-[#F3F4F6]">
              <div>
                <p className="text-xs tracking-wide text-[#71717A] uppercase">Created by</p>
                <p className="font-medium text-[#F3F4F6]">{createdBy}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-[#71717A] uppercase">Created at</p>
                <p className="font-medium text-[#F3F4F6]">{new Date(createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-[#71717A] uppercase">Updated at</p>
                <p className="font-medium text-[#F3F4F6]">{new Date(updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-between *:select-none">
              <div className="flex items-center">
                <CopyButton buttonStyling="mr-2" text={id} />
                <p className="text-sm tracking-tighter text-[#52525B]">T ID #{id}</p>
              </div>
              <div className="mr-24">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRequestDelete(id)
                  }}
                  className="transition-color cursor-pointer rounded-sm px-2 py-1 text-destructive duration-300 hover:bg-destructive hover:text-[#181b20] hover:underline">
                    Delete Task
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRequestEdit(task)
                  }}
                  className="transition-color ml-5 cursor-pointer rounded-sm px-2 py-1 text-info duration-300 hover:bg-info hover:text-[#181b20] hover:underline">
                    Edit Task
                </button>
              </div>
              <div className="flex items-center">
                <p className="text-sm tracking-tighter text-[#52525B]">WSPC ID#{workspaceId}</p>
                <CopyButton buttonStyling="ml-2" text={workspaceId} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  )
};