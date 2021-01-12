import React from "react"
import './App.css';
import { Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Stock from "./Pages/Stock"


function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
      <Route path="/Stock">
        <Stock />
      </Route>
    </div>
  );
}

export default App;
