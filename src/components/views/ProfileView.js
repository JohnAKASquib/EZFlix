import React from "react";
import "./styles/NavBarView.css";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ProfileView = (props) => {
    console.log(props.loggedInUser);
    if (!props.isLoggedIn) {
        return <Redirect to={`/`} />;
    }
    const date = props.loggedInUser.createdAt.toString().substring(0, 10);
    return (
        <div>
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
            </div>
        </div>
    );
};

export default ProfileView;