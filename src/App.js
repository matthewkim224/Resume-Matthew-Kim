import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Technical_Skills from './components/pages/Technical-Experience';
import Experience from './components/pages/Experience';
import Hobbies from './components/pages/Hobbies';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/' exact component= {Home}/>
        <Route path ='/education' exact component= {Education}/>
        <Route path ='/technical-skills' exact component= {Technical_Skills}/>
        <Route path ='/experience' exact component= {Experience}/>
        <Route path ='/hobbies' exact component= {Hobbies}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
