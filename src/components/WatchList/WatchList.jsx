import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../NowPlayingMovies/NowPlayingMovies.css";
import { removeFav } from "../../Store/Slices/FavMovies";
import LanguageContext from "../../context/LanguageContenxt";

const API_KEY = "6b0d387af9e025e2ea2cb28f2470f077";
const BASE_API_URL = "https://api.themoviedb.org/3/movie";

const WatchList = () => {
  const [language] = useContext(LanguageContext);

  const isArabic = language === "ar";

  const rtlClass = isArabic ? "rtl" : "";
  const [movies, setMovies] = useState([]);

  // Get favorites from Redux store
  const favorites = useSelector((state) => state.favMovies.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, [favorites]); // Fetch movies whenever favorites change

  const fetchMovies = async () => {
    const movieRequests = favorites.map((id) => {
      const url = `${BASE_API_URL}/${id}?api_key=${API_KEY}`;
      return fetch(url).then((response) => response.json());
    });

    Promise.all(movieRequests)
      .then((moviesData) => {
        setMovies(moviesData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const removeFromFavorites = (movieId) => {
    dispatch(removeFav(movieId));
  };

  return (
    <div className={`Now_playing_movies_div container mt-5 ${rtlClass}`}>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="Now_playing_movies">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <p className="movie_title text-dark fw-bold text-center ">
                {movie.title}
              </p>
              <div className="date_rating">
                <p className="date">
                  {new Date(movie.release_date).getFullYear()}
                </p>
                <div className="category">
                  {movie.vote_average}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="Yellow"
                      className="star bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                </div>
                <div
                  className="removeFromFave"
                  onClick={() => removeFromFavorites(movie.id)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-heart text-danger fs-5"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
