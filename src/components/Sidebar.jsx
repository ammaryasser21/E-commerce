import { Link } from "react-router-dom";
import Main_logo from "../assets/_images_logo_logo.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "../components/DashboardCSS/Sidebar.css";
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
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to={{ pathname: `/` }}>
        <div className="side-img">
          <img className="logo" src={Main_logo} alt="" />
        </div>
      </Link>
      <div className="inner">
        <nav className="side_eles">
          {navItemsAndIcons.map((item) => (
            <Link
              to={{ pathname: `/${item.linkName}` }}
              style={{ display: "flex" }}
              className="element"
            >
              <div className="side-icon" style={{ marginRight: "10px" }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              {item.navName}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
