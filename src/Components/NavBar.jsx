import "../Styles/AllStyles.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [showLinks , setShowLinks] = useState(false)
  return (
    <div className="container">
      <Link className="title">
        <h1>
          <span className="tag-symbol">{"<"}</span>
          <span className="highlight">S</span>aad
          <span style={{ color: "white" }}>{"/"}</span>
          <span className="tag-symbol">{">"}</span>
        </h1>
      </Link>
  <div className="menuIcon" onClick={() => setShowLinks(currentValue => !currentValue)}>
     <CiMenuFries />
  </div>
     <div className={`linksSection ${showLinks ? 'show' : ''}`}>
         <ul>
        <li className="isActive">Home</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>About me</li>
        <li>Portfolio</li>
      </ul>
      <div className="darkModeIcon">
        <LightModeIcon />
      </div>
     </div>
    </div>
  );
}
