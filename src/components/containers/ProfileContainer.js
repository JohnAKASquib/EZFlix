import React, { Component } from "react";
import { connect } from "react-redux";
import { me, fetchFavoriteMoviesThunk } from "../../thunks";
import ProfileView from "../views/ProfileView";

class ProfileContainer extends Component {
    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.fetchFavoriteMovies(this.props.loggedInUser.id);
        }
    }

    render() {
        console.log(this.props.favoriteMovies);
        return (
            <ProfileView 
                isLoggedIn={this.props.isLoggedIn}
                loggedInUser={this.props.loggedInUser}
                favoriteMovies={this.props.favoriteMovies}
            />
        )
    }
}

const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id,
        loggedInUser: state.user,
        favoriteMovies: state.favoriteMovies,
    };
};

const mapDispatch = (dispatch) => {
    return {
        me: () => dispatch(me()),
        fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMoviesThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(ProfileContainer);