import "./NavBar.css";
import { useState } from "react";
import {
  FaChartLine,
  FaChalkboardTeacher,
  FaChargingStation,
  FaChartBar,
  FaChartPie,
  FaCompactDisc,
  FaDove,
  FaFillDrip,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const navItems = [
    {
      icon: <FaChartBar />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <FaChalkboardTeacher />,
      text: "Settings",
      link: "/Settings",
    },
    {
      icon: <FaChartLine />,
      text: "Profile",
      link: "/Profile",
    },
    {
      icon: <FaChargingStation />,
      text: "Projects",
      link: "/Projects",
    },
    {
      icon: <FaChartPie />,
      text: "Courses",
      link: "/Courses",
    },
    {
      icon: <FaCompactDisc />,
      text: "Friends",
      link: "/Friends",
    },
    {
      icon: <FaFillDrip />,
      text: "Files",
      link: "/Files",
    },
    {
      icon: <FaDove />,
      text: "Plans",
      link: "/Plans",
    },
  ];

  const [showText, setShowText] = useState(false);

  return (
    <aside>
      {/* <h1 className="titile visability-heddin">Abu Khaled</h1> */}
      <ul className="p-3 pt-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="nav-li d-flex align-items-center justify-content-start pb-3 pt-3 ps-3 rounded"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            <Link to={item.link} className={showText ? "d-none" : ""}>
              {item.icon}
            </Link>
            <Link
              to={item.link}
              className={showText ? "d-inline-flex" : "d-none"}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default NavBar;
