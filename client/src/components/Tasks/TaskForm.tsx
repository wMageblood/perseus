import { useState, useEffect } from "react";
import type { ITask } from "../../types/task";
import { formatTask } from "../../utils/formatTask";
import { createTask, updateTask } from "../../services/task.service";

interface TaskFormProps {
  onClose: () => void
  onUpdate: (task: ITask) => void
  onCreate: (task: ITask) => void
  mode: "create" | "edit"
  task?: ITask
};

export const TaskForm = ({ onClose, mode, task, onUpdate, onCreate}: TaskFormProps) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("Frontend");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    if ( mode === "edit" && task ) {
      setTitle(task.title)
      setDescription(task.description)
      setDepartment(task.department)
      setPriority(task.priority)
      setAssignedTo(task.assignedTo ?? "")
      setDueDate(task.dueDate.split("T")[0])
    }

  }, [mode, task])

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {

    e.preventDefault()

    const taskData = {
      title,
      description,
      department,
      priority,
      assignedTo,
      dueDate,
    };

    if (mode === "create") {

      try {

        setIsLoading(true);

        const createdTask = await createTask(taskData);

        if (!createdTask) return;

        onCreate(formatTask(createdTask));

        onClose();

      } catch (error) {

        console.error(error);

      } finally {

        setIsLoading(true)
      };

    } else {

      const updatedTask = await updateTask(task!.id, taskData)

      onUpdate(formatTask(updatedTask));

      onClose();
    };
  };

  return (

    <form onSubmit={handleSubmit} id="task-form" className="flex flex-1 flex-col overflow-y-auto p-6">
      <div className="flex-1 space-y-6 overflow-y-auto">
        <div>
          <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Title </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white outline-none focus:border-[#C5A46D]" placeholder="Fix login issue..."/>
        </div>

        <div>
          <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Description </label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2 min-h-62.5 w-full resize-none rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-3 font-Mona text-sm text-white outline-none focus:border-[#C5A46D]" placeholder="Describe the task..." />
        </div>

        <div className="grid flex-1 grid-cols-2 gap-6 overflow-y-auto">
          <div>
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Department </label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white">
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>

          <div>
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Priority </label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Assigned To </label>
            <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white">
              <option>Nobody</option>
            </select>
          </div>

          <div>
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Due Date </label>
            <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white"/>
          </div>

        </div>

        <div className="rounded-md border border-dashed border-[#31415F] p-6 text-center text-sm text-[#71717A]"> Attachments coming soon </div>
      </div>

        <div className="flex justify-end gap-3 border-t border-[#22252C] px-6 py-4">
          <button onClick={onClose} type="button" className="rounded-md px-4 py-2 text-sm font-semibold text-[#A1A1AA] transition-colors hover:text-white">
            Cancel
          </button>

          <button disabled={isLoading} type="submit" className={`${isLoading === true ? "bg-gray-500" : null} px-4 py-2 rounded-md bg-[#C5A46D] text-black text-sm font-semibold hover:opacity-90 transition-opacity`}>
            { mode === "create" ? "Create Task" : "Save Changes" }
          </button>
        </div>
    </form>
  )
};