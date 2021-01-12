import React from "react"
import './App.css';
import { Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Stock from "./Pages/Stock"
import Nav from "./Components/Nav"


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/stock/:symbol" render={
        (routerProps) => <Stock {...routerProps}/>
        } />
    </div>
  );

  // return(
  //   <h1>Hellow</h1>
  // )
}

export default App;
