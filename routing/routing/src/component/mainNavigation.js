import { NavLink } from "react-router-dom";
import classes from "./mainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              style={({ isActive }) => ({
                textAlign: isActive ? "center" : "left",
              })}
              F
              //end used to tell that if only this above path is used only then show highlights otherwise no.
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
