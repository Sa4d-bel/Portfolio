import "../Styles/AllStyles.css";
import Footer from "./Footer";
import Logo from "./logo";
import MainContent from "./MainContent";

export default function Main() {
  return <section className="Main-Section">
      <div className="main">
        <MainContent />
      <Logo />
      </div>
      <Footer />
  </section>;
}
