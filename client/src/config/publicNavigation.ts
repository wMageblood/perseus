import { APP_ROUTES } from "./appRoutes";

export const PUBLIC_NAVIGATION = [
  {
    path: APP_ROUTES.HOME,
    label: "Home",
  },
  {
    path: APP_ROUTES.LOGIN,
    label: "Login",
  },
  {
    path: APP_ROUTES.REGISTER,
    label: "Register",
  },
  {
    path: APP_ROUTES.DASHBOARD, //Remove from public navigation after auth is implemented.
    label: "Dashboard",
  },

];