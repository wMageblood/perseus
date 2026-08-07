import { useAuth } from "../../../hooks/useAuth"

export const SidebarProfileName = () => {

  const { user } = useAuth()

  return (
    <p className="text-black dark:text-white font-Mona font-semibold mt-1">{user?.globalName}</p>
  )
};