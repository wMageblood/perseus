import { NavLink, Outlet } from "react-router-dom";
import { WORKSPACE_TABS } from "../config/workspaceTabs";

export const WorkspaceLayout = () => {
  return (
    <div className="flex flex-col bg-[#0f1012]">
      <div className="my-5 mb-px flex flex-row gap-4 px-10">
        {WORKSPACE_TABS.map(({path, label}) => (
          <NavLink key={path} to={path} className={({isActive}) =>
          `flex font-Mona items-center text-[#F3F4F6]
          ${isActive ? "font-bold border-b-2 border-[#c5a46d]" : ""}
          `}>
            {label}
          </NavLink>
        ))}
      </div>
        <div className='flex-1 overflow-y-auto'>
          <Outlet />
        </div>
    </div>
  )
};