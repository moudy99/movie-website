import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NowPlayingMovies.css";
import ReactPaginate from "react-paginate";
import { addToFave, removeFav } from "../../Store/Slices/FavMovies";

const API_KEY = "6b0d387af9e025e2ea2cb28f2470f077";
const BASE_API_URL = "https://api.themoviedb.org/3/movie";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const favorites = useSelector((state) => state.favMovies.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);
  const fetchMovies = () => {
    const API_URL = `${BASE_API_URL}/now_playing?api_key=${API_KEY}&page=${currentPage}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  const fetchMovieDetails = async (movieId) => {
    const movieUrl = `${BASE_API_URL}/${movieId}?api_key=${API_KEY}`;

    try {
      const response = await fetch(movieUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  const handleAddToFavorites = async (movieId) => {
    if (favorites.includes(movieId)) {
      dispatch(removeFav(movieId));
    } else {
      const movieDetails = await fetchMovieDetails(movieId);
      if (movieDetails) {
        dispatch(addToFave(movieId));
      }
    }
  };

  return (
    <div className="Now_playing_movies_div container mt-5">
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
              <p className="movie_title text-dark fw-bold text-center">
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
                  className="addFave"
                  onClick={() => handleAddToFavorites(movie.id)}
                  style={{ cursor: "pointer" }}
                >
                  {favorites.includes(movie.id) ? (
                    <i className="fa-solid fa-heart text-danger fs-5"></i>
                  ) : (
                    <i className="fa-regular fa-heart text-dark"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
      />
    </div>
  );
};

export default NowPlayingMovies;
