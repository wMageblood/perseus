import { LogOut } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";

export const SidebarProfileLogout = () => {

  const { logout } = useAuth();

  return (
    <button onClick={logout}>
      <LogOut className="w-10 h-10 p-1 rounded-md text-[#A1A1AA] duration-300 hover:bg-[#1a1d22] hover:text-destructive" />
    </button>
  )
};