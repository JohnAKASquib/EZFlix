import React, { Component } from "react";

const MovieView = (props) => {
    return (
      <div
        className="card text-center mt-5 mb-5"
        key={props.movie.id}
        style={{ width: 28.5 + "rem" }}
      >
        <div className="card-header">
            <h3>{props.movie.title ? props.movie.title : props.movie.name}</h3>
        </div>
        <div className="card-body">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            width="150px"
            alt={props.movie.title}
          />
          <p>{props.movie.overview}</p>
        </div>
        <div className="card-footer text-muted">
          <p>
            {props.movie.release_date ? props.movie.release_date : props.movie.first_air_date}
          </p>
        </div>
      </div>
    );
}

export default MovieView;
