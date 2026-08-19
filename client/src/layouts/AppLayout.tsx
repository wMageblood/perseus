import { Sidebar } from "../components/Sidebar"
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className='flex-1 overflow-y-auto bg-[#0f1012]'>
        <Outlet />
      </div>
    </div>
  )
};