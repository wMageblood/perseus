import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface CopyButtonProps {
  text: string
  buttonStyling?: string
}

export const CopyButton = ({text, buttonStyling}: CopyButtonProps) => {

  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText(text)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000);
  };


  return (

    <button onClick={handleClick} aria-label="Copy to clipboard" className={buttonStyling}>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="text-success w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            <Copy className="text-[#A1A1AA] w-4 h-4" />
          </motion.div>
      )}
      </AnimatePresence>
    </button>
  )
};