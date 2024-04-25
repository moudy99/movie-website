import { Link } from "react-router-dom";
import logo from "../../assets/580a7324842216f1d2654c4acd3ae541.png";
import { useContext } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import LanguageContext from "../../context/LanguageContenxt";
const Header = () => {
  let [language, setLanguage] = useContext(LanguageContext);
  console.log(language);
  const favoritesCount = useSelector((state) => state.favMovies.count);

  const isArabic = language === "ar";

  const rtlClass = isArabic ? "rtl" : "";
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-custom p-0 ${rtlClass}`}
    >
      {" "}
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="" style={{ width: "50px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex  align-items-center justify-content-center "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  align-items-center justify-content-center ">
            <li className="nav-item">
              <Link to="/movies" className="nav-link active">
                {language === "en" ? "Movies" : "الافلام"}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {language === "en" ? "Type" : "النوع"}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item action" href="#">
                    {language === "en" ? "Action" : "اكشن"}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {language === "en" ? "Animation" : "كرتون"}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {language === "en" ? "comdy" : "كوميدي"}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {language === "en" ? "Drama" : "دراما"}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/WatchList" className="nav-link active">
                {language === "en" ? "Watch List" : "قائمة المفضلة"}
                <i className="fa-solid fa-heart text-danger"></i>
                {favoritesCount > 0 && (
                  <span className=" badge fav-num">{favoritesCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link active text-primary">
                {language === "en" ? "Create account" : "انشاء حساب"}
              </Link>
            </li>

            <li className="nav-item">
              <select
                name="language"
                id="lang"
                className="form-select "
                style={{ cursor: "pointer" }}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en" style={{ cursor: "pointer" }}>
                  English
                </option>
                <option value="ar" style={{ cursor: "pointer" }}>
                  Arabic
                </option>
              </select>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder={language === "en" ? "Search" : "بحث"}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              {language === "en" ? "Search" : "بحث"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
