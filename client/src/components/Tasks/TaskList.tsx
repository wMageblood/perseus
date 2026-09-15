import { TaskHeader } from "./TaskHeader";
import { TaskRow } from "./TaskRow";
import type { ITask } from "../../types/task";
import type { IWorkspaceMembers } from "../../types/workspace";

interface TaskListProps {
  tasks: ITask[];
  onRequestDelete: (id: string) => void
  onRequestEdit: (task: ITask) => void
  members: IWorkspaceMembers[]
};

export const TaskList = ({tasks, onRequestDelete, onRequestEdit, members}: TaskListProps) => {

  return (
    <>
      <div className="mb-5">
        <TaskHeader />
      </div>

      {tasks.map((task) => {

        console.log("assignedTo de la task:", task.assignedTo)
        console.log("members disponibles:", members)

        const assignedMember = members.find((member) => member.user.id === task.assignedTo);

        return (


          <TaskRow
          assignedMember={assignedMember}
          key={task.id}
          task={task}
          onRequestDelete={onRequestDelete}
          onRequestEdit={onRequestEdit}
          />
        )
      })}
    </>
  )
};