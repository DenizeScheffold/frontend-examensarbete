import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import WeekComponent from "./WeekComponent";
import LoginComponent from "./LoginComponent";
import Signup from "../Signup";
import Profile from "../Profile";
import EditProfile from "../EditProfile";
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
              path="/week"
              element={
                <AuthenticatedRoute>
                  <WeekComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/profile/:username"
              element={
                <AuthenticatedRoute>
                  <Profile />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/editprofile/:username"
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
