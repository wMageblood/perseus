import { ChevronDownCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { IWorkspace, IWorkspacePayload, WorkspaceColor, WorkspaceIcon } from "../../types/workspace"
import { createWorkspace, updateWorkspace } from "../../services/workspace.service";

interface WorkspaceFormProps {
  mode: "create" | "edit"
  workspace?: IWorkspace
  onClose: () => void
  onCreate: (workspace: IWorkspace) => void
  onUpdate: (workspace: IWorkspace) => void
};

export const WorkspaceForm = ( { onClose, onCreate, onUpdate, mode, workspace }: WorkspaceFormProps ) => {

  const [ isColorOpen, setIsColorOpen ] = useState(false)
  const [ isIconOpen, setIsIconOpen ] = useState(false)

  const [ name, setName ] = useState("")
  const [ color, setColor ] = useState<WorkspaceColor>("blue")
  const [ icon, setIcon ] = useState<WorkspaceIcon>("doggy")

  useEffect(() => {

    if ( mode === "edit" && workspace) {
      setName(workspace.name)
      setColor(workspace.color)
      setIcon(workspace.icon)
    }

  }, [mode, workspace])

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {

    e.preventDefault()

    const workspaceData: IWorkspacePayload = {
      name,
      color,
      icon,
    };

    if ( mode === "create" ) {

      try {

        const createdWorkspace = await createWorkspace(workspaceData)

        if (!createdWorkspace) return;

        onCreate(createdWorkspace);

        onClose();

      } catch ( error ) {

        console.error(error);

      }

    } else {

      const updatedWorkspace = await updateWorkspace(workspace!.id, workspaceData)

      onUpdate(updatedWorkspace)

      onClose()
    };
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto">
      <div className="flex-1 space-y-6 overflow-y-auto p-6">

        <div>
          <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Title </label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-md border border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white outline-none focus:border-[#C5A46D]" placeholder="Frontend"/>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-6">
          <div className="relative">
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Color </label>
            <ChevronDownCircle className={`absolute top-10.5 right-2 size-5 text-[#5e5e66] transition-all duration-300 ${isColorOpen === true ? "rotate-90" : "rotate-0"}`} />
            <select value={color} onChange={(e) => setColor(e.target.value as WorkspaceColor)} onFocus={() => setIsColorOpen(true)} onBlur={() => setIsColorOpen(false)} className="mt-2 w-full appearance-none rounded-md border-2 border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white outline-[#C5A46D] focus:outline-1">
              <option>blue</option>
              <option>green</option>
              <option>red</option>
              <option>yellow</option>
            </select>
          </div>
          <div className="relative">
            <label className="font-Mona text-sm font-semibold text-black dark:text-[#F3F4F6]"> Icon </label>
            <ChevronDownCircle className={`absolute top-10.5 right-2 size-5 text-[#5e5e66] transition-all duration-300 ${isIconOpen ? "rotate-90" : "rotate-0"}`} />
            <select value={icon} onChange={(e) => setIcon(e.target.value as WorkspaceIcon)} onFocus={() => setIsIconOpen(true)} onBlur={() => setIsIconOpen(false)} className="mt-2 w-full appearance-none rounded-md border-2 border-[#22252C] bg-[#0F1012] px-3 py-2 font-Mona text-sm text-white outline-[#C5A46D] focus:outline-1">
              <option>doggy</option>
              <option>kitty</option>
              <option>taskit</option>
              <option>lildashboard</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-[#22252C] px-6 py-4">
        <button type="button" onClick={onClose} className="rounded-md px-4 py-2 text-sm font-semibold text-[#A1A1AA] transition-colors hover:text-white">
          Cancel
        </button>

        <button type="submit" className={`px-4 py-2 rounded-md bg-[#C5A46D] text-black text-sm font-semibold hover:opacity-90 transition-opacity`}>
          { mode === "create" ? "Create Workspace" : "Save Changes" }
        </button>
      </div>

    </form>
  )
};
