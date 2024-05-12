import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "../components/DashboardCSS/Sidebar.css";
import "../components/DashboardCSS/Mobilenavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCompass,
  faUser,
  faUsers,
  faTableCellsLarge,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const navItemsAndIcons = [
  {
    navName: "Dashboard",
    linkName: "Dashboard",
    icon: faTableCellsLarge,
  },
  {
    navName: "Product",
    linkName: "Dashproduct",
    icon: faCompass,
  },
  {
    navName: "Category",
    linkName: "Dashcategory",
    icon: faLayerGroup,
  },
  {
    navName: "Orders",
    linkName: "Orders",
    icon: faLocationDot,
  },
  {
    navName: "OurTeam",
    linkName: "Ourteam",
    icon: faUsers,
  },
  {
    navName: "Log out",
    linkName: "",
    icon: faUser,
  },
];

const Mobilenavbar = () => {
  return (
    
      <div className="burger-menu">
        <div
          className="collapse"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div className="mobile-navbar">
            <nav className="nav-elements">
              {navItemsAndIcons.map((item) => (
                <Link
                key={item.navName}
                  to={{ pathname: `/${item.linkName}` }}
                  style={{ display: "flex" }}
                  className="nav-ele"
                >
                  <div className="side-icon" style={{ marginRight: "10px" }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {item.navName}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <nav className="navbar navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    
  );
};

export default Mobilenavbar;
