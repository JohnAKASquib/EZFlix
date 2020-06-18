import React, { Component } from "react";
import { connect } from "react-redux";
import { me } from "../../thunks";
import ProfileView from "../views/ProfileView";

class ProfileContainer extends Component {
    render() {
        return (
            <ProfileView 
                isLoggedIn={this.props.isLoggedIn}
                loggedInUser={this.props.loggedInUser}
            />
        )
    }
}

const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id,
        loggedInUser: state.user,
    };
};

const mapDispatch = (dispatch) => {
    return {
        me: () => dispatch(me()),
    };
};

export default connect(mapState, mapDispatch)(ProfileContainer);