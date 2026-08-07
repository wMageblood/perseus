import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { WorkspaceForm } from "./WorkspaceForm";
import type { IWorkspace } from "../../types/workspace";

interface CreateWorkspaceModalProps {
  open: boolean
  mode: "create" | "edit"
  workspace?: IWorkspace
  onClose: () => void
  onCreate: (workspace: IWorkspace) => void
  onUpdate: (workspace: IWorkspace) => void
};


export const CreateWorkspaceModal = ( { open, onClose, onCreate, onUpdate, workspace, mode }: CreateWorkspaceModalProps ) => {

  return (
    <AnimatePresence>

        { open && (
            <>

              <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} exit={{ opacity: 0, scale: 0.95, y: 20}} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6">
                <div className="pointer-events-auto flex h-[45vh] w-full max-w-2xl flex-col rounded-xl border border-[#22252C] bg-white shadow-2xl dark:bg-[#131519]">

                  <div className="flex items-center justify-between border-b border-[#22252C] px-6 py-4">
                    <div>
                      <h1 className="font-Mona text-xl font-semibold text-black dark:text-[#F3F4F6]">
                        Create Workspace
                      </h1>
                      <h2 className="font-Mona text-sm text-[#71717A]">
                        Create a new Workspace and configure it.
                      </h2>
                    </div>
                    <button onClick={onClose} className="text-[#A1A1AA] transition-colors hover:text-white">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <WorkspaceForm onUpdate={onUpdate} onCreate={onCreate} onClose={onClose} mode={mode} workspace={workspace} />

                </div>
              </motion.div>

            </>
        )}

    </AnimatePresence>

  )
};