import { Link } from "react-router-dom";
import "../Styles/AllStyles.css";
import mainPage from "../pictures/main-page.png";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <>
      <motion.section
        className="ProjectsSection"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="project-container">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
          >
            My <span>Projects</span>
          </motion.h1>
          <div className="project">
            <label className="project-title">CRUD Dashboard</label>

            <div className="main-image">
              <img src={mainPage} alt="main" />
            </div>
            <p>
              This project is a React-based front-end CRUD application designed
              to manage customer data efficiently. It allows users to add,
              update, delete, search, and view detailed information for each
              customer. All data is stored locally using the browser's local
              storage, ensuring fast and seamless interaction.
            </p>
            <div className="links">
              <Link to={"https://myadvancedcrud.netlify.app/"} target="_blank">
                <button>Live demo</button>
              </Link>
              <Link
                to={"https://github.com/Sa4d-bel/Crud-Project"}
                target="_blank"
              >
                <button>Github</button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
