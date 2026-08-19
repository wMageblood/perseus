import { Route, Routes } from "react-router-dom"
import { PublicLayout } from "../layouts/PublicLayout"
import { Landing } from "../Pages/Landing"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { Dashboard } from "../Pages/Dashboard"
import { AppLayout } from "../layouts/AppLayout"
import { Workspace } from "../Pages/Workspace"
import { Tasks } from "../Pages/Tasks"
import { Members } from "../Pages/Members"
import { Settings } from "../Pages/Settings"
import { APP_ROUTES } from "../config/appRoutes"
import { ProtectedRoute } from "./ProtectedRoute"
import { WorkspaceLayout } from "../layouts/WorkspaceLayout"


export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={APP_ROUTES.HOME} element={<Landing />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTER} element={<Register />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route element={<ProtectedRoute/>}>
          <Route path={APP_ROUTES.WORKSPACELAYOUT} element={<WorkspaceLayout />}>
            <Route path={APP_ROUTES.TASKS} element={<Tasks />} />
            <Route path={APP_ROUTES.MEMBERS} element={<Members />} />
          </Route>
          <Route path={APP_ROUTES.WORKSPACE} element={<Workspace />} />
          <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={APP_ROUTES.SETTINGS} element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
};