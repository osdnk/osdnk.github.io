import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Curriculum from './curriculum/Curriculum';
import About from './about-me/About';
import Projects from './projects/Projects';
import Technologies from './technologies/Technologies';
import Hi from './hi/Hi';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-topBar"/>
          <Header/>
          <Route exact path="/" component={Hi}/>
          <Route path="/about-me" component={About}/>
          <Route path="/curriculum" component={Curriculum}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/technologies" component={Technologies}/>
        </div>
      </Router>
    );
  }
}

export default App;
