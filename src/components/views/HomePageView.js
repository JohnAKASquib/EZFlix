import React from "react";
import "./styles/HomePageView.css"

const HomePageView = (props) => {
  return (
    <div className="home-page">
      <h1 className="lead">Trending Movies</h1>
    <div className="container">      
      {props.allMovies.map((movie) => (
        <div
          className="card text-center mt-5 mb-5"
          key={movie.id}
          style={{ width: 28.5 + "rem" }}
        >
          <div className="card-header">
            <h3>{movie.title}</h3>
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
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HomePageView;
