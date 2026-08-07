import { AnimatePresence, motion } from "motion/react"

interface ConfirmModalProps {
  open: boolean,
  title: string,
  description: string,
  confirmText?: string,
  cancelText?: string,
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmModal = ({
   open,
   title,
   description,
   confirmText = "DELETE TASK",
   cancelText = "CANCEL",
   onCancel,
   onConfirm
  }: ConfirmModalProps) => {

    return (
      <AnimatePresence>
          { open && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2, ease: "easeOut" }} className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6">
                <div className="pointer-events-auto w-full max-w-md rounded-xl border border-[#22252C] bg-white shadow-2xl dark:bg-[#131519]">
                  <div className="px-6 pt-6">
                    <h1 className="font-Mona text-xl font-semibold text-black dark:text-[#F3F4F6]">
                      {title}
                    </h1>
                    <p className="mt-3 font-Mona text-sm leading-relaxed text-[#71717A]">
                      {description}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end gap-3 border-t border-[#22252C] px-6 py-5">

                    <button onClick={onCancel} className="rounded-md px-4 py-2 font-Mona text-sm font-semibold text-[#A1A1AA] transition-colors hover:text-white">
                      {cancelText}
                    </button>

                    <button onClick={onConfirm} className="bg-danger rounded-md px-4 py-2 font-Mona text-sm font-semibold text-destructive transition-opacity hover:opacity-90">
                      {confirmText}
                    </button>

                  </div>
                </div>
              </motion.div>
            </>
          )}
      </AnimatePresence>
  )
};