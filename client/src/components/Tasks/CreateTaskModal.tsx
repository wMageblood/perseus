import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { TaskForm } from "./TaskForm";
import type { ITask } from "../../types/task";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
  mode: "create" | "edit"
  task?: ITask
  onUpdate: (task: ITask) => void
  onCreate: (task: ITask) => void
};

export const CreateTaskModal = ({ open, onClose, mode, task, onUpdate, onCreate}: CreateTaskModalProps) => {

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2, ease: "easeOut" }} className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="pointer-events-auto flex h-[90vh] w-full max-w-6xl flex-col rounded-xl border border-[#22252C] bg-white shadow-2xl dark:bg-[#131519]">
              <div className="flex items-center justify-between border-b border-[#22252C] px-6 py-4">
                <div>
                  <h1 className="font-Mona text-xl font-semibold text-black dark:text-[#F3F4F6]"> Create Task </h1>
                  <p className="font-Mona text-sm text-[#71717A]"> Create a new task for your workspace.</p>
                </div>
                <button onClick={onClose} className="text-[#A1A1AA] transition-colors hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <TaskForm onCreate={onCreate} onUpdate={onUpdate} onClose={onClose} mode={mode} task={task} />

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};