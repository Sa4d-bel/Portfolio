import { useState } from "react";
import "./App.css";
import ContactSection from "./Components/ContactSection";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import "./Styles/AllStyles.css";
import { MyContext } from "./Contexts/AllContexts";
import SkillsSection from "./Components/SkillsSection";
import { Route , Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe";


function App() {
  const [showContactSection , setShowContactSection] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MyContext.Provider value={{showContactSection , setShowContactSection , darkMode, setDarkMode}}>
    <div className="App" style={{color : !darkMode ? 'white' : ''}}>
      <NavBar />
      <ContactSection />
  
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/skills" element={<SkillsSection />}></Route>
      <Route path="/about me" element={<AboutMe />}></Route>
    </Routes>
      </div>
    </ MyContext.Provider>
  );
}

export default App;
