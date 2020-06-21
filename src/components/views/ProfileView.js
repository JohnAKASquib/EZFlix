import React from "react";
import "./styles/NavBarView.css";
import "./styles/ProfileView.css";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ProfileView = (props) => {
    let listOfFavoriteMovies = [];

    if (!props.isLoggedIn) {
        return <Redirect to={`/login`} />;
    }

    if (props.favoriteMovies.length !== 0) {
        props.favoriteMovies.map((movie) => (
            listOfFavoriteMovies.push(movie)
        ))
    }

    const date = props.loggedInUser.createdAt.toString().substring(0, 10);

    return (
        <div className="profile-page container-fluid">
            <h2 className="py-5">Account</h2>
            <hr/>
            <div className="row px-5 ">
                <div className="col px-5">
                    <h4>Email:</h4>
                    
                </div>
                <div
                className="col px-5 "
                key={props.loggedInUser.id}
                style={{ width: 28.5 + "rem" }}
            >
                <div className="float-right"> 
                    <h5>{props.loggedInUser.email}</h5>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={props.handleLogout}>Logout</button>
                </div>
            </div>

            </div>
            <div className="row px-5">
                    <div className="col px-5 ">
                        <h4>User since:</h4>
                    </div>
                    <div className="col px-5">
                        <div className="float-right">
                            <h5>{date}</h5>
                        </div>
                    </div>
                    
            </div>
            <img src={props.loggedInUser.imageUrl} alt={props.isLoggedIn.email} />
            <hr/>

            <h2 className="py-5">Your Favorite Movies:</h2>
            <div className="containcard mb-5">
                {props.favoriteMovies.length === 0 ? <div className="alert alert-warning">{props.loggedInUser.email} has no favorited movies.</div> : <div>{listOfFavoriteMovies.map((movie) => (
                    <div
                        className="card text-center mb-5"
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
                        <div className="card-footer ">
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