import "../Styles/AllStyles.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MyContext } from "../Contexts/AllContexts";
import { useEffect } from "react";

export default function NavBar() {
  const { showContactSection,setShowContactSection } = useContext(MyContext);
  const [showLinks, setShowLinks] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const NavBarItems = ["Home", "About", "Skills", "Projects", "Contact"].map(
    (item, index) => {
      return (
       <li
  key={index}
  onClick={() => {
    setIsActive(item); 
    setShowLinks(false);

    if(item === 'Contact'){
       setShowContactSection((lastValue) => !lastValue);
    } else {
       setShowContactSection(false);
    }
  }}
  className={isActive === item ? "Active" : ""}
>
  <Link to="">{item}</Link>
</li>

      );
    }
  );
   useEffect(() => {
    if (!showContactSection) {
      setIsActive("Home");
    }
  }, [showContactSection]);

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
      <div
        className="menuIcon"
        onClick={() => setShowLinks((currentValue) => !currentValue)}
      >
        <CiMenuFries />
      </div>
      <div className={`linksSection ${showLinks ? "show" : ""}`}>
        <ul>{NavBarItems}</ul>
        <div className="darkModeIcon">
          <LightModeIcon />
        </div>
      </div>
    </div>
  );
}
