import "./LandingSection.css";
import img from "../../assets/John-Wick-Posters-Rule.jpg";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="overlay"></div>
      <div className="content">
        <h1
          className="display-1 shadow-sm text-light"
          style={{ fontWeight: "400" }}
        >
          Welcome to Cinema Online
        </h1>
        <button className="btn btn-outline-light btn-lg">Watch Now</button>
      </div>
      <div className="movie-poster-container">
        <img src={img} alt="Movie Poster" className="movie-poster" />
        <div className="play-button"></div>
      </div>
    </section>
  );
};

export default LandingSection;
