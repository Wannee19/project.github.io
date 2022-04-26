import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'

import Education from './contents/Education'
import Experience from './contents/Experience'
import Skills from './contents/Skills'
import Contact from './contents/Contact'
import Project from './contents/Project'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/experience">
          <Experience />
        </Route>
  
        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/project">
          <Project />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>
  );
}

export default App;
