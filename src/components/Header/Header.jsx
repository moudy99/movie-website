import { Link } from "react-router-dom";
import logo from "../../assets/580a7324842216f1d2654c4acd3ae541.png";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const favoritesCount = useSelector((state) => state.favMovies.count);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom p-0 ">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/movies" className="nav-link active">
                Movies
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
                Type
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item action" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Animation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sci-Fi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/WatchList" className="nav-link active">
                Watch List <i className="fa-solid fa-heart text-danger"></i>
                {favoritesCount > 0 && (
                  <span className=" badge fav-num">{favoritesCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link active text-primary">
                Create Account
              </Link>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
