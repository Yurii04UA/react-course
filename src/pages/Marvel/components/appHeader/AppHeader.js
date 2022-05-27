import "./appHeader.scss";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app__header mb-5">
      <h1 className="app__title">
        <Link to="/marvel-page/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              to="/marvel-page/"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "inherit",
              })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              end
              to="/marvel-page/comics"
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "inherit",
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
