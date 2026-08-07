import { useEffect, useState } from "react";
import { WorkspaceContainer } from "../components/Workspace/WorkspaceContainer"
import { CreateWorkspaceModal } from "../components/Workspace/CreateWorkspaceModal";
import { deleteWorkspace, getWorkspaces } from "../services/workspace.service";
import type { IWorkspace } from "../types/workspace";
import { ConfirmModal } from "../components/ui/ConfirmModal";

export const Workspace = () => {

  const [ open, setOpen ] = useState(false);

  const [ workspaces, setWorkspaces ] = useState<IWorkspace[]>([]);

  const [ workspaceToDelete, setWorkspaceToDelete ] = useState<string | null>(null);

  const [ selectedWorkspace, setSelectedWorkspace ] = useState<IWorkspace | null>(null);

  const handleRequestDelete = ( id: string ) => setWorkspaceToDelete(id)

  useEffect(() => {
    const fetchWorkspaces = async () => {

      try {

        const data = await getWorkspaces();

        setWorkspaces(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkspaces()
  }, []);

  const handleOpenCreateWorkspaceModal = () => {
    setOpen(true)
    setSelectedWorkspace(null)
  };
  const handleCloseCreateWorkspaceModal = () => {
    setOpen(false)
    setSelectedWorkspace(null)
  };

  const handleCreate = (workspace: IWorkspace) => {
    setWorkspaces((prev) => [...prev, workspace])
  };

  const handleDelete = async ( id: string ) => {

    try {

      await deleteWorkspace(id);

      setWorkspaces((prev) =>
        prev.filter((workspace) => workspace.id !== id)
      );
    } catch (error) {
      console.error(error);
    }

  };

  const handleRequestEdit = (workspace: IWorkspace) => {
    setSelectedWorkspace(workspace)
    setOpen(true)
  };

  const handleUpdateWorkspace = (updatedWorkspace: IWorkspace) => {
    setWorkspaces((prev) =>
      prev.map((workspace) =>
        workspace.id === updatedWorkspace.id ? updatedWorkspace : workspace))
  };


  return (

    <>
      <div className="min-h-screen bg-white p-10 transition-colors duration-300 dark:bg-[#0F1012]">
        <div className="">
          <h1 className="font-Mona text-2xl font-600 text-black dark:text-[#F3F4F6]">Workspaces</h1>
          <h2 className="text-md mt-2 font-Mona font-600 text-black dark:text-[#A1A1AA]">Explore your assigned workspaces.</h2>
        </div>

        <WorkspaceContainer onRequestEdit={handleRequestEdit} onRequestDelete={handleRequestDelete} workspaces={workspaces} onCreateWorkspace={handleOpenCreateWorkspaceModal} />

        <CreateWorkspaceModal
          open={open}
          mode={selectedWorkspace ? "edit" : "create"}
          onUpdate={handleUpdateWorkspace}
          workspace={selectedWorkspace ?? undefined}
          onCreate={handleCreate}
          onClose={handleCloseCreateWorkspaceModal}
        />

        <ConfirmModal
          open={workspaceToDelete !== null}
          title="Delete Workspace"
          description="Are you sure you want to delete this Workspace? This action is irreversible."
          confirmText="DELETE WORKSPACE"
          cancelText="Cancel"
          onCancel={() => setWorkspaceToDelete(null)}
          onConfirm={ async () => {
            console.log("clicked deleted")
            if (!workspaceToDelete) return;
            await handleDelete(workspaceToDelete);
            setWorkspaceToDelete(null)
          }}
        />

      </div>
    </>

  )
};