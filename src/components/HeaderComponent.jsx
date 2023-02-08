import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logout() {
    authContext.logout();
  }

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
        
       
            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/welcome/user">
                    Home
                  </Link>
                )}
              </li>
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/week">
                    Week Planner
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to={`/profile/${authContext.username}`}>
                    Profile
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to={`/editprofile/${authContext.username}`}>
                    Edit Profile
                  </Link>
                )}
              </li>
            </ul>


          <ul className="navbar-nav">
            <li className="nav-item">
              {!isAuthenticated && (
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              )}
            </li>
            </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              {!isAuthenticated && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}

              </li>

            <li className="nav-item">
              {isAuthenticated && (
                <Link className="nav-link" to="/logout" onClick={logout}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  );
}

export default HeaderComponent;
