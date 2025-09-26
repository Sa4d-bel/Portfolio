import { Link } from "react-router-dom";
import "../Styles/AllStyles.css";
import mainPage from "../pictures/main-page.png";
import Footer from "./Footer";

export default function ProjectsSection() {
  return (
    <>
      <section className="ProjectsSection">
        <div className="project-container">
          <h1>
            My <span>Projects</span>
          </h1>
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
              <Link to={"https://testsaadbel.netlify.app"} target="_blank">
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
      </section>
      <Footer />
    </>
  );
}
