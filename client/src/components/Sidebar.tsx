import { SidebarLogo } from "./Sidebar/SidebarLogo"
import { SidebarNavigation } from "./Sidebar/SidebarNavigation"
import { SidebarProfile } from "./Sidebar/SidebarProfile"

export const Sidebar = () => {

  return (
    <aside className={`flex flex-col h-screen w-72 border-r bg-white dark:bg-[#131519] duration-300 dark:border-[#22252C]`}>
      <SidebarLogo />
      <SidebarNavigation />
      <SidebarProfile />
    </aside>
  )
};