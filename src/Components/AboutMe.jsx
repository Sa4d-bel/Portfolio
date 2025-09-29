import "../Styles/AllStyles.css";
import studentLogo from "../pictures/Etudiant.png";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <motion.section
        className="AboutMe"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
          }}
        >
          About <span>Me</span>
        </motion.h1>
        <div className="aboutMeContent">
          <div className="studentLogo">
            <img src={studentLogo} alt="student-logo" />
          </div>
          <div className="studentContent">
            <p>
              Hi! I'm Saad Belhous, a 22-year-old student from Salé, Morocco.
              I’m currently in my 3rd year studying Artificial Intelligence at
              the Faculty of Sciences, Kenitra. Alongside my studies, I dedicate
              my free time to learning and building modern websites. I have
              strong skills in HTML, CSS, JavaScript, React.js, Git/GitHub,
              Postman, and working with APIs (self-taught). From my academic
              background, I gained solid foundations in C, C++, Data Structures,
              OOP, Ubuntu, Shell, Assembly (basics), Algorithms, and MySQL
              databases. I’m passionate about improving my skills and bridging
              the gap between AI and web development. My goal is to grow as a
              developer and contribute to impactful projects.
            </p>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
