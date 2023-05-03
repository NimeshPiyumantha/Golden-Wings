import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const activeLink = "border-b-2 cursor-pointer";
const normalLink = "cursor-pointer";
export default function Header() {
  return (
    <div className="bg-white border-gray-200 px-4 h-16  dark:bg-gray-600 font-Poppins text-white">
      <div className="w-full h-full">
        <div className="flex w-full h-full items-center">
          <div className="w-3/4 flex justify-center">
            <h1 className="font-Poppins ">Nimma</h1>
          </div>
          <div className="w-1/2">
            <nav className="flex w-full gap-5">
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <h4>Home</h4>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <h4>About</h4>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <h4>Contact</h4>
              </NavLink>
              <NavLink to={"/"} className="cursor-pointer">
                <LogoutIcon />
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
