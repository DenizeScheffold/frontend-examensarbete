import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Week from './Week';
import Login from './components/Login';

function App() {
  return (
    <main className="App">
      
{/*       <Router>
        <Routes>
          <Route path="/week" element={<Week />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      <Login/>
    </main>
  );
}

export default App;