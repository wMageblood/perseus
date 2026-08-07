import { NavLink } from "react-router-dom"
import { PUBLIC_NAVIGATION } from "../config/publicNavigation"

export const PublicHeader = () => {
  return (
    <header>

        {/* LOGO */}

      <nav aria-label="Public Navigation" className={`text-center mt-5`}>
        {PUBLIC_NAVIGATION.map(({path, label}) => (
          <NavLink key={path} to={path} className={({isActive}) =>
            `px-4 py-2 rounded-full mx-2 font-Mona font-500 transition-colors
            ${isActive
              ? "font-600 bg-[#e8e9e3]"
              : "text-gray-600 hover:bg-[#f3f4ef]"}`}>
            {label}
          </NavLink>
        ))}
      </nav>

    </header>
  )
}