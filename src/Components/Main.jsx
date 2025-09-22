import "../Styles/AllStyles.css";
import Logo from "./logo";
import MainContent from "./MainContent";

export default function Main() {
  return <section className="Main-Section">
      <MainContent />
      <Logo />
  </section>;
}
