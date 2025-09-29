import "../Styles/AllStyles.css";
import { Link } from "react-router-dom";
//icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

import { motion } from "framer-motion";

export default function MainContent() {
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  return (
    <div className="Main-Content">
      <h3>Hello,It's me</h3>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="MyName"
      >
        Saad Belhous
      </motion.h1>
      <h3 className="typing">
        <span>Ai Student</span> <span className="howIam">&</span>{" "}
        <span>Front-end Developer</span>
      </h3>
      <p>
        I am an Artificial Intelligence student and aspiring Front-End Developer
        with a passion for building modern and user-friendly web application
      </p>
      <div className="contact-icons">
        <div>
          <Link
            to={"https://www.facebook.com/saad.belhous.2025?locale=fr_FR"}
            target="_blanck"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div>
          <Link to={"https://www.instagram.com/sa4d.belhous/"} target="_blanck">
            <FaInstagram />
          </Link>
        </div>
        <div>
          <Link to={""} target="_blanck">
            <FaWhatsapp />
          </Link>
        </div>
        <div>
          <Link to={"https://github.com/Sa4d-bel"} target="_blanck">
            <FaGithub />
          </Link>
        </div>
      </div>

      <div
        className="downloadCv"
        onClick={() => {
          setShowDownloadMessage(true);
          setTimeout(() => setShowDownloadMessage(false), 3000);
        }}
      >
        <button>Download CV</button>
      </div>
      <label
        className={`downloadMessage ${
          showDownloadMessage ? "showDownladMessage" : ""
        }`}
      >
        {" "}
        Soon inshallah...
      </label>
    </div>
  );
}
