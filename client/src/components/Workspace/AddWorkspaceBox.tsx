import { Plus } from "lucide-react";

interface AddWorkspaceBoxProps {
  onCreateWorkspace: () => void
  title: string
};


export const AddWorkspaceBox = ( { title, onCreateWorkspace }: AddWorkspaceBoxProps ) => {
  return (
    <div onClick={onCreateWorkspace} className="transition-color relative flex max-h-35 min-h-35 max-w-35 min-w-35 items-center justify-center rounded-md border border-[#22252c] bg-[#1c1e22] p-2.5 text-center duration-300 hover:bg-[#0f1012]">
      <h1 className="font-Mona font-semibold text-[#f3f4f6] select-none">{ title }</h1>
      <Plus className="absolute top-1 right-1 bg-[#22252c]/15 text-[#f3f4f6] transition-colors duration-300 hover:text-success" />
    </div>
  )
};