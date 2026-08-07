import { useAuth } from "../../../hooks/useAuth"

export const SidebarProfileAvatar = () => {

  const { user } = useAuth()

  return (
    <img className="w-11 h-11 rounded-full" src={user?.avatar}/>
  )
}