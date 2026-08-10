import { useState, useEffect } from "react";
import type { ITask } from "../types/task";
import { TaskList } from "../components/Tasks/TaskList";
import { CreateTaskModal } from "../components/Tasks/CreateTaskModal";
import { ConfirmModal } from "../components/ui/ConfirmModal";
import { deleteTask, getTasks } from "../services/task.service";
import { useParams } from "react-router-dom";

export const Tasks = () => {

  const [ createTaskOpen, setCreateTaskOpen ] = useState(false)

  const [ tasks, setTasks ] = useState<ITask[]>([]);

  const [ taskToDelete, setTaskToDelete ] = useState<string | null>(null)

  const [ selectedTask, setSelectedTask ] = useState<ITask | null>(null)

  const { workspaceId } = useParams()

  const handleRequestDelete = (id: string) => setTaskToDelete(id)

  useEffect(() => {
    const fetchTasks = async () => {

      try {

        const data = await getTasks(workspaceId!);

        setTasks(data);

      } catch (error) {

        console.error(error);

      }
    };

    fetchTasks();

}, []);

  const handleDelete = async (id: string) => {

    try {

      await deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );

    } catch (error) {
      console.error(error);
    }

  };

  const handleOpenCreateTask = () => {
    setSelectedTask(null)
    setCreateTaskOpen(true)
  };

  const handleRequestEdit = (task: ITask) => {
    console.log("EDIT CLICK:", task);

    setSelectedTask(task);
    setCreateTaskOpen(true);
  };

  const handleCloseModal = () => {
    setCreateTaskOpen(false)
    setSelectedTask(null)
  };

  const handleUpdateTask = (updatedTask: ITask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleCreate = (task: ITask) => {
    setTasks((prev) => [...prev, task])
  };

  return (
    <div className="min-h-screen bg-white p-10 transition-colors duration-300 dark:bg-[#0F1012]">
      <div>
        <h1 className="font-Mona text-2xl font-600 text-black dark:text-[#F3F4F6]">Tasks</h1>
        <h2 className="text-md mt-2 font-Mona font-600 text-black dark:text-[#A1A1AA]">Section where it shows the current tasks assigned to each team.</h2>
      </div>
      <div>
        <button onClick={handleOpenCreateTask} className="mt-10 ml-5 cursor-pointer font-Mona font-semibold text-info hover:underline">+ Create New Task</button>
      </div>

      <TaskList onRequestEdit={handleRequestEdit} tasks={tasks} onRequestDelete={handleRequestDelete} />

      <CreateTaskModal
        open={createTaskOpen}
        mode={selectedTask ? "edit" : "create"}
        task={selectedTask ?? undefined}
        onClose={handleCloseModal}
        onUpdate={handleUpdateTask}
        onCreate={handleCreate}
        workspaceId={workspaceId!}
      />

      <ConfirmModal
        open={taskToDelete !== null}
        title="Delete Task"
        description="Are you sure you want to delete this task? This action is irreversible."
        confirmText="DELETE TASK"
        cancelText="Cancel"
        onCancel={() => setTaskToDelete(null)}
        onConfirm={async () => {
          if (!taskToDelete) return;
          await handleDelete(taskToDelete);
          setTaskToDelete(null);
        }}
      />
    </div>
  );
};