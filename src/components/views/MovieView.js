import React from "react";
import "./styles/MovieView.css";

const MovieView = (props) => {
  let favoriteButton;
  if (props.isLoggedIn) {
    favoriteButton = (
      <button className="btn btn-primary" onClick={() => props.handleSubmit(props.movie.id)}>Add to Favorites</button>
    );
  }
  return (
    <div className="container1">
      <div
        className="card1 text-center mt-5 mb-5"
        key={props.movie.id}
        style={{ width: 60 + "rem" }}
      >
        <div className="card-header1">
          <h3>{props.movie.title ? props.movie.title : props.movie.name}</h3>
          {favoriteButton}
          <pre></pre>
        </div>
        <div className="card-body1-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            width="350px"
            alt={props.movie.title}                        
          /> 
          <h3>Voters</h3>
          <p>{props.movie.vote_count}</p>
          <h3>Voter's Rating</h3>
          <p>{props.movie.vote_average}</p>
          <p>{props.movie.overview}</p>
          <div className="card-footer1 text-muted">           
            <h2>Release Date</h2>
            <p>{props.movie.release_date ? props.movie.release_date : props.movie.first_air_date}</p>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default MovieView;
