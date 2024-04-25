import "./LandingSection.css";
import img from "../../assets/John-Wick-Posters-Rule.jpg";
import LanguageContext from "../../context/LanguageContenxt";
import { useContext } from "react";

const LandingSection = () => {
  const [language] = useContext(LanguageContext);

  const isArabic = language === "ar";

  const rtlClass = isArabic ? "rtl" : "";
  return (
    <section className={`landing-section ${rtlClass}`}>
      <div className="overlay"></div>
      <div className="content">
        <h1
          className="display-1 shadow-sm text-light"
          style={{ fontWeight: "400" }}
        >
          {language === "ar"
            ? "اهلا بك في سينما اونلاين"
            : " Welcome to Cinema online"}
        </h1>
        <button className="btn btn-outline-light btn-lg">
          {" "}
          {language === "ar" ? "مشاهدة الان" : "Watch Now"}
        </button>
      </div>
      <div className="movie-poster-container">
        <img src={img} alt="Movie Poster" className="movie-poster" />
        <div className="play-button"></div>
      </div>
    </section>
  );
};

export default LandingSection;
