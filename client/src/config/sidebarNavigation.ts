import { APP_ROUTES } from "./appRoutes";
import { Workflow, LayoutDashboard, ListCheck, UsersRound, Cog } from "lucide-react";


export const SIDEBAR_NAVIGATION = [
  {
    path: APP_ROUTES.DASHBOARD,
    label: "Dashboard",
    icon: LayoutDashboard,
    iconClassName: "text-gray-600 dark:text-[#F3F4F6]"
  },
  {
    path: APP_ROUTES.WORKSPACE,
    label: "Workspace",
    icon: Workflow,
    iconClassName: "text-gray-600 dark:text-[#F3F4F6]"
  },
  {
    path: APP_ROUTES.TASKS,
    label: "Tasks",
    icon: ListCheck,
    iconClassName: "text-gray-600 dark:text-[#F3F4F6]"
  },
  {
    path: APP_ROUTES.MEMBERS,
    label: "Members",
    icon: UsersRound,
    iconClassName: "text-gray-600 dark:text-[#F3F4F6]"
  },
  {
    path: APP_ROUTES.SETTINGS,
    label: "Settings",
    icon: Cog,
    iconClassName: "text-gray-600 dark:text-[#F3F4F6]"
  },
];