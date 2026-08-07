import { NavLink } from "react-router-dom";
import PERSEUS from "../../assets/Logo.png"

export const SidebarLogo = () => {
  return (
    <NavLink to={"/"}>
      <img className="" src={PERSEUS} />
    </NavLink>
  )
};