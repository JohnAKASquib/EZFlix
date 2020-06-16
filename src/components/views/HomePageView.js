import React from "react";

const HomePageView = (props) => {
  return (
    <div className="container">
      <h3 className="lead">Movies</h3>
      {props.allMovies.map((movie) => (
        <div
          className="card text-center mt-5 mb-5"
          key={movie.id}
          style={{ width: 45 + "rem" }}
        >
          <div className="card-header">
            <h3>{movie.title}</h3>
          </div>
          <div className="card-body">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="200px"
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
  );
};

export default HomePageView;
