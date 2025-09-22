import { useState } from "react";
import "./App.css";
import ContactSection from "./Components/ContactSection";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import "./Styles/AllStyles.css";
import { MyContext } from "./Contexts/AllContexts";


function App() {
  const [showContactSection , setShowContactSection] = useState(false)
  return (
    <MyContext.Provider value={{showContactSection , setShowContactSection}}>
    <div className="App">
      <NavBar />
      <ContactSection />
      <Main />
    </div>
    </ MyContext.Provider>
  );
}

export default App;
