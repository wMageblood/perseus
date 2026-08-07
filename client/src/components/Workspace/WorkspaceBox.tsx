import { Edit, Minus } from "lucide-react";
import type { IWorkspace, WorkspaceColor, WorkspaceIcon } from "../../types/workspace";
import { useNavigate } from "react-router-dom";

interface WorkspaceBoxProps {
  workspace: IWorkspace
  name: string
  color: WorkspaceColor
  icon: WorkspaceIcon
  onRequestDelete: ( id: string ) => void
  onRequestEdit: ( workspace: IWorkspace ) => void
};


export const WorkspaceBox = ( { onRequestDelete, workspace, onRequestEdit }: WorkspaceBoxProps ) => {

  const navigate = useNavigate();

  const {
    id,
    name,
    owner,
    members,
    color,
    icon,
    createdAt,
    updatedAt,
  } = workspace;

  return (
    <div onClick={() => navigate(`/app/workspaces/${workspace.id}/tasks`)} className="transition-color relative flex min-h-35 w-auto max-w-35 min-w-35 items-center justify-center rounded-md border border-[#22252c] bg-[#0f1012] p-2.5 text-wrap duration-300 hover:bg-[#1c1e22]">
      <button onClick={(e) =>  {
        e.stopPropagation()
        onRequestDelete(id)
        }}>
        <Minus className="absolute top-1 right-1 rounded-md bg-[#22252c]/15 text-[#F3F4F6] transition-colors duration-300 hover:text-destructive" />
      </button>
      <button onClick={(e) =>  {
        e.stopPropagation()
        onRequestEdit(workspace)
        }}>
        <Edit className="absolute right-1 bottom-1 size-5 rounded-md bg-[#22252c]/15 text-[#F3F4F6] transition-colors duration-300 hover:text-info" />
      </button>

      <h1 className="truncate font-Mona font-semibold text-[#F3F4F6] select-none">{ name }</h1>

    </div>
  )
};