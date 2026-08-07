import { TaskHeader } from "./TaskHeader";
import { TaskRow } from "./TaskRow";
import type { ITask } from "../../types/task";

interface TaskListProps {
  tasks: ITask[];
  onRequestDelete: (id: string) => void;
  onRequestEdit: (task: ITask) => void
};

export const TaskList = ({tasks, onRequestDelete, onRequestEdit}: TaskListProps) => {

  return (
    <>
      <div className="mb-5">
        <TaskHeader />
      </div>

      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          onRequestDelete={onRequestDelete}
          onRequestEdit={onRequestEdit}
        />
      ))}
    </>
  )
};