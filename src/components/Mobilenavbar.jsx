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
    navName: "Sign in",
    linkName: "Dashsignin",
    icon: faUser,
  },
];

const Mobilenavbar = () => {
  return (
    <>
      <div className="burger-menu">
        <div
          class="collapse"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div className="mobile-navbar">
            <nav className="nav-elements">
              {navItemsAndIcons.map((item) => (
                <Link
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
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Mobilenavbar;
