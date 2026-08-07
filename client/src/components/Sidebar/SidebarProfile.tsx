import { SidebarProfileAvatar } from "./SidebarProfile/SidebarProfileAvatar"
import { SidebarProfileName } from "./SidebarProfile/SidebarProfileName"
import { SidebarProfileStatus } from "./SidebarProfile/SidebarProfileStatus"
import { SidebarProfileLogout } from "./SidebarProfile/SidebarProfileLogout"

export const SidebarProfile = () => {

  return (
    <div className={`flex bg-white"} mb-2 mx-2 rounded-md items-center`}>

      <div className="mr-2">
        <SidebarProfileAvatar />
      </div>
      <div className="text-left">
        <SidebarProfileName />
        <SidebarProfileStatus />
      </div>
      <div className="flex ml-auto mr-2">
        <SidebarProfileLogout />
      </div>
    </div>
  )
}