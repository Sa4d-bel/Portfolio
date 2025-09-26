import "../Styles/AllStyles.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MyContext } from "../Contexts/AllContexts";
import { useEffect } from "react";

export default function NavBar() {
  const { showContactSection, setShowContactSection, darkMode, setDarkMode } = useContext(MyContext);
  const [showLinks, setShowLinks] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [lastActive, setLastActive] = useState("Home"); 
  const NavBarItems = ["Home", "About", "Skills", "Projects", "Contact"].map(
  (item, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          if (item === "Contact") {
            if (showContactSection) {
              setShowContactSection(false);
              setIsActive(lastActive);
            } else {
              setLastActive(isActive);
              setShowContactSection(true);
              setIsActive(item);
            }
          } else {
            setShowContactSection(false);
            setIsActive(item);
          }
        }}
        className={isActive === item ? "Active" : ""}
      >
        {item === "Contact" ? (
          <span className={item}>{item}</span>
        ) : (
          <Link
            to={
              item === "Skills"
                ? "/skills"
                : item === "About"
                ? "/about me"
                : item === "Projects" 
                ? "/projects" 
                : "/"
            }
          >
            {item}
          </Link>
        )}
      </li>
    );
  }
);
 useEffect(() => {
  if (!showContactSection && isActive === "Contact") {
    setIsActive(lastActive || "Home"); 
  }
}, [showContactSection, isActive, lastActive]);

  
  const toggleDarkMode = () => {
    if (!darkMode) {
      document.documentElement.style.setProperty("--PrimaryColor", "#121212"); // dark bg
      document.documentElement.style.setProperty("--SecondaryColor", "white"); // text white
    } else {
      document.documentElement.style.setProperty("--PrimaryColor", "white");
      document.documentElement.style.setProperty("--SecondaryColor", "black");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="container" style={{ background: "transparent" }}>
      <Link className="title" to={'/'} onClick={() => setIsActive("Home")}>
        <h1>
          <span className="tag-symbol">{"<"}</span>
          <span className="highlight">S</span>aad
          <span className="tag-symbol slash">{"/"}</span>
          <span className="tag-symbol">{">"}</span>
        </h1>
      </Link>
      <div
        className="menuIcon"
        onClick={() => setShowLinks((currentValue) => !currentValue)}
      >
        <CiMenuFries />
      </div>

      <div className={`linksSection ${showLinks ? "show" : ""}`}>
        <div className="aux">
          <ul>{NavBarItems}</ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LightModeIcon
              className="darkModeIcon"
              onClick={() => toggleDarkMode()}
            />
          </div>
        </div>
        <IoIosArrowDropupCircle
          className="closeIcon"
          onClick={() => setShowLinks(false)}
        />
      </div>
    </div>
  );
}
