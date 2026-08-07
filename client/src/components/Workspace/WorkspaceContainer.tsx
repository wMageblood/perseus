import type { IWorkspace } from "../../types/workspace";
import { AddWorkspaceBox } from "./AddWorkspaceBox";
import { WorkspaceBox } from "./WorkspaceBox";

interface WorkspaceContainerProps {
  workspaces: IWorkspace[]
  onCreateWorkspace: () => void
  onRequestDelete: (id: string) => void
  onRequestEdit: (workspace: IWorkspace) => void
};

export const WorkspaceContainer = ( { onCreateWorkspace, workspaces, onRequestDelete, onRequestEdit }: WorkspaceContainerProps ) => {

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <AddWorkspaceBox onCreateWorkspace={onCreateWorkspace} title="Workspace" />

      {workspaces.map((workspace) => (
        <WorkspaceBox
          workspace={workspace}
          key={workspace.id}
          name={workspace.name}
          color={workspace.color}
          icon={workspace.icon}
          onRequestEdit={onRequestEdit}
          onRequestDelete={onRequestDelete}
        />
      ))}
    </div>
  )
};