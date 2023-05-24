import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from '../src/views/home/HomePage';
import WordSearchView from '../src/views/games/gamesViews/WordSearchView'
import Games from '../src/views/games/Games';
import GuessWhoView from '../src/views/games/gamesViews/GuessWhoView';
import CreateYourAvatarView from '../src/views/games/gamesViews/CreateYourAvatarView';
import Learn from '../src/views/learn/Learn';
import Admin from '../src/views/admin/Admin';
import SingUpView from '../src/views/admin/adminViews/SingUpView'
import StudentListView from '../src/views/admin/adminViews/StudentListView'
import Logged from '../src/views/logged/Logged';

import AuthService from "./services/AuthService";

import Router from "./routes/Router";
import LoginPage from "./components/login-page/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Gabo113
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
            </div>
          )}
        </nav>

        <div className="container mt-3">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logged" element={<Logged />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/wordSearch" element={<WordSearchView />} />
            <Route path="/games/guessWho" element={<GuessWhoView />} />
            <Route path="/games/createYourAvatar" element={<CreateYourAvatarView />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/singUp" element={<SingUpView />} />
            <Route path="/admin/studentList" element={<StudentListView />} />
          </Routes>
        </div>
      </div>
    );
  }
}


export default App;
