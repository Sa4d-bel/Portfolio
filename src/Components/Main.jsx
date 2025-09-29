import "../Styles/AllStyles.css";
import Footer from "./Footer";
import Logo from "./logo";
import MainContent from "./MainContent";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.section
      className="Main-Section"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className="main">
        <MainContent />
        <Logo />
      </div>
      <Footer />
    </motion.section>
  );
}
