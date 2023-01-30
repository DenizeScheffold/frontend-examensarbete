import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Week from './Week';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/week" element={<Week />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;