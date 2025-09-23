import { useState, useContext } from "react";
import "../Styles/AllStyles.css";
import { MyContext } from "../Contexts/AllContexts";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const { showContactSection, setShowContactSection } = useContext(MyContext);

  const [userMessage, setUserMessage] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_xoevpkv",
        "template_htxnp2t",
        {
          user_name: userMessage.fullName,
          phone: userMessage.phone,
          user_email: userMessage.email,
          message: userMessage.message,
        },
        "ZZuzJaUMDwk92Rs9d"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleShowMessage();
          setUserMessage({ fullName: "", phone: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again!");
          setIsSending(false);
        }
      );
  };

  return (
    <section className={`ContactSection ${showContactSection ? "slide" : ""}`}>
      <h1>
        Contact <span>Me</span>
      </h1>
      <p className="contact-message">
        I’ll be more than happy to hear from you. Feel free to reach out anytime!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="fullName"
          placeholder="Full Name"
          value={userMessage.fullName}
          onChange={(event) =>
            setUserMessage({ ...userMessage, fullName: event.target.value })
          }
          required
        />
        <div className="contact">
          <input
            type="text"
            className="number"
            placeholder="Phone Number"
            value={userMessage.phone}
            onChange={(event) =>
              setUserMessage({ ...userMessage, phone: event.target.value })
            }
          />
          <input
            type="email"
            className="email"
            placeholder="Adresse Email"
            value={userMessage.email}
            onChange={(event) =>
              setUserMessage({ ...userMessage, email: event.target.value })
            }
            required
          />
        </div>
        <textarea
          placeholder="Your Message ..."
          value={userMessage.message}
          onChange={(event) =>
            setUserMessage({ ...userMessage, message: event.target.value })
          }
          required
        />
        <div className="submitButton">
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          <button
            type="button"
            onClick={() => setShowContactSection(false)}
          >
            Cancel
          </button>
        </div>
        <label className={`${showMessage ? "show" : ""}`}>
          Your message has been sent successfully.
        </label>
      </form>
    </section>
  );
}
