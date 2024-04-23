import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6b0d387af9e025e2ea2cb28f2470f077`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  console.log(movie);
  return (
    <div className="movie-details-container">
      {movie ? (
        <div className="movie-details-content">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="poster"
            />
          </div>
          <div className="details-container">
            <h2 className="title text-dark">{movie.title}</h2>
            <p className="overview">{movie.overview}</p>
            <div className="details">
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Rating:</strong> {movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
