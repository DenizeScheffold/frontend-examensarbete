import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ViewWeek from "../ViewWeek";
import LoginComponent from "./LoginComponent";
import Signup from "../Signup";
import Profile from "../Profile";
import EditProfile from "../EditProfile";
import SetDayComponent from "./SetDayComponent";
import AuthProvider, { useAuth } from "../context/AuthContext";

import "./WeekPlanner.css";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function WeekPlanner() {
  return (
    <div className="WeekPlanner">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
          <Route exact path="/" element={<LoginComponent />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
                <Route
              path="/setdays"
              element={
                <AuthenticatedRoute>
                  <SetDayComponent />
                </AuthenticatedRoute>
              }
              />
            <Route
              path="/viewweek"
              element={
                <AuthenticatedRoute>
                  <ViewWeek />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthenticatedRoute>
                  <Profile />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/editprofile"
              element={
                <AuthenticatedRoute>
                  <EditProfile />
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
