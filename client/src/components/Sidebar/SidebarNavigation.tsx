import { NavLink } from "react-router-dom";
import { SIDEBAR_NAVIGATION } from "../../config/sidebarNavigation";

export const SidebarNavigation = () => {
  return (
      <nav aria-label="Public Navigation" className={`text-left mt-5 flex flex-col h-full gap-2`}>
        {SIDEBAR_NAVIGATION.map(({path, label, icon: Icon, iconClassName}) => (
          <NavLink key={path} to={path} className={({isActive}) =>
            `px-4 py-2 flex items-center gap-3 rounded-md mx-2 font-Mona font-500 transition-colors duration-500 dark:text-[#F3F4F6]
            ${isActive
              ? "font-600 bg-[#e8e9e3] dark:bg-[#22262D]"
              : "text-gray-600 hover:bg-[#f3f4ef] dark:hover:bg-[#1A1D22]"}`}>
            <Icon className={iconClassName} /> {label}
          </NavLink>
        ))}
      </nav>
  )
};