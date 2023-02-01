import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Week from './Week';
import WeekPlanner from './components/WeekPlanner';

function App() {
  return (
    <main className="App">
      
{/*       <Router>
        <Routes>
          <Route path="/week" element={<Week />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      <WeekPlanner/>
    </main>
  );
}

export default App;