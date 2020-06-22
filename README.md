# EZFlix Client

EZFlix is a full stack web application completed for the CUNY2X bootcamp. The client portion of the project was built with React, Redux, and Node.js. Developed by Alba Bell, Alvin Munar, John Stendardo, and Mathew Davidov.

# Deployment

[Link to the deployed website.](https://ezflix.netlify.app/)

# Server

[Link to the server portion of the application.](https://github.com/MathewDavidov/capstone-project-server)

# Run the App

In the command line:

```shell
npm install
npm start
```

# Routes

### Home

When you visit the home page, all the trending movies will load. On all pages, the navigation bar with load, displaying a link to Home and the ability to search by terms, by genre, or by both. If the user is logged in, extra links "Profile" and "Logout" will display. If the user is not logged in, "Login" and "Signup" links will display.

### Signup

Users will be given the option to create an account with their emails, password, and an optional profile picture. Given the user has a valid email, the passwords match, and are at least 6 characters long, sign up will complete and redirect to the login page.

### Login

Users will be able to log in with accounts previously created at this route.

### Single Movie 

Users can click a movie to view more detailed information in a seperate view. If the user is logged-in, they will be able to press a button to add the movie to a list of their favorite movies.

### Profile

Users who are logged-in can view their profile page with their email, profile image, and a list of favorite movies. In this view, they are able to edit the list of movies by removing a movie from their favorites.

### Search

When users search for a movie using any of the three methods (search term, genre, or both), the user will be redirected to a search view that displays the results of their search. 
