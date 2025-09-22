import { useState } from "react";
import "../Styles/AllStyles.css";
import { useContext } from "react";
import { MyContext } from "../Contexts/AllContexts";

export default function ContactSection() {
     const { showContactSection , setShowContactSection } = useContext(MyContext);
    const [showMessage , setShowMessage] = useState(false)
    const handleShowMessage = () => {
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 3000)
    }
    const handleSubmit=  (event) =>{
        event.preventDefault()
        handleShowMessage()
    }
  return (
    <section className={`ContactSection ${showContactSection ? 'slide' : ''}`}>
      <h1>
        Contact <span>Me</span>
      </h1>
      <p className="contact-message">
        I’ll be more than happy to hear from you . Feel free to reach out
        anytime!
      </p>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <input type="text" className="fullName" placeholder="Full Name" />
        <div className="contact">
          <input type="text" className="number" placeholder="Phone Number" />
          <input type="email" className="email" placeholder="Adresse Email" />
        </div>
        <textarea placeholder="Your Message ..." />
        <div className="submitButton">
          <button type="submit">Send Message</button>
          <button onClick={() => setShowContactSection(false)}>Cancel</button>
        </div>
        <label className={`${showMessage ? 'show' : ''}`}>Your message has been sent successfully.</label>
      </form>
    </section>
  );
}
