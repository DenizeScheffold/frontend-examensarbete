import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from '../context/AuthContext'

import './Login.css'

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function Login() {
    return (
        <div className="Login">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={ <LoginComponent /> } />
                        <Route path='/login' element={ <LoginComponent /> } />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute> 
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent /> 
                            </AuthenticatedRoute>
                        } />
                        
                  
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}