import React from "react";
import "./styles/HomePageView.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const SearchPageView = (props) => {
  return (
    <div className="home-page">
      <h1 className="lead">Trending Movies</h1>
      <pre> </pre>
      <div className="container">
        {props.allMovies.map((movie) => (
          <div
            className="card text-center"
            key={movie.id}
            style={{ width: 28.5 + "rem" }}
          >
            <div className="card-header">
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title ? movie.title : movie.name}</h3>
              </Link>
            </div>
            <div className="card-body">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width="150px"
                alt={movie.title}
              />

              <p>{movie.overview}</p>
            </div>
            <div className="card-footer text-muted">
              <p>
                {movie.release_date ? movie.release_date : movie.first_air_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPageView;
