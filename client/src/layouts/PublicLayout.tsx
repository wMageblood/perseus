import { PublicHeader } from "../components/PublicHeader";
import { Outlet } from "react-router-dom";


export const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />


      <main className="flex flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
};