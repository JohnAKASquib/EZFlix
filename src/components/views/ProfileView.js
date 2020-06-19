import React from "react";
import "./styles/NavBarView.css";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ProfileView = (props) => {
    let listOfFavoriteMovies = [];

    if (!props.isLoggedIn) {
        return <Redirect to={`/login`} />;
    }

    if (props.favoriteMovies.length !== 0) {
        props.favoriteMovies.map((movie) => {
            listOfFavoriteMovies.push(movie);
        })
    }

    const date = props.loggedInUser.createdAt.toString().substring(0, 10);

    return (
        <div className="container">
            <div
                className="card text-center"
                key={props.loggedInUser.id}
                style={{ width: 28.5 + "rem" }}
            >
                <div className="card-header">
                    <h3>{props.loggedInUser.email}</h3>
                </div>
                <div className="card-body">
                    <img
                        src={`${props.isLoggedIn.imageUrl}`}
                        width="150px"
                        alt={`Profile`}
                    />
                </div>
                <div className="card-footer text-muted">
                    <p>
                        User since {date}
                    </p>
                </div>
            </div>
            <div>
                {props.favoriteMovies.length === 0 ? <div className="alert alert-warning">{props.loggedInUser.email} has no favorited movies.</div> : <div>{listOfFavoriteMovies.map((movie) => (
                    <div
                        className="card text-center"
                        key={movie.id}
                        style={{ width: 28.5 + "rem" }}
                    >
                        <div className="card-header">
                            <Link to={`/movies/${movie.movieAPIid}`}>
                                <h3>{movie.title ? movie.title : movie.name}</h3>
                            </Link>
                        </div>
                        <div className="card-body">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                                width="150px"
                                alt={movie.title}
                            />
                            <h3>Voters</h3>
                            <p>{movie.vote_count}</p>
                            <h3>Voter's Rating</h3>
                            <p>{movie.vote_average}</p>
                            <p>{movie.overview}</p>
                            <button className="btn btn-danger" onClick={() => props.handleSubmit(movie.movieAPIid)}>Remove from Favorites</button>
                        </div>
                        <div className="card-footer text-muted">
                            <h2>Release Date</h2>
                            <p>
                                {movie.releaseDate ? movie.releaseDate : movie.first_air_date}
                            </p>
                        </div>
                    </div>
                ))}
                </div>}
            </div>
        </div>
    );
};

export default ProfileView;