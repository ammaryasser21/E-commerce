import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    navName: "Logout",
    linkName: "",
    icon: faUser,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token-admin');
    navigate('/', { replace: true });
  };

  return (
    <aside className="sidebar">
      <Link to={{ pathname: `/Dashboard` }}>
        <div className="side-img">
          <img className="logo" src={Main_logo} alt="" />
        </div>
      </Link>
      <div className="inner">
        <nav className="side_eles">
          {navItemsAndIcons.map((item) => (
            <div key={item.navName} style={{ display: "flex" }} className="element">
              {item.linkName ? (
                <Link to={{ pathname: `/${item.linkName}` }} style={{ display: "flex" }}>
                  <div className="side-icon" style={{ marginRight: "10px" }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {item.navName}
                </Link>
              ) : (
                <div onClick={handleLogout} style={{ display: "flex", cursor: "pointer" }}>
                  <div className="side-icon" style={{ marginRight: "10px" }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {item.navName}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
