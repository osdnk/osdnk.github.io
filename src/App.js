import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resume from './resume/Resume';
import About from './about-me/About';
import Projects from './projects/Projects';
import Work from './work/Work';
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
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/work" component={Work}/>
        </div>
      </Router>
    );
  }
}




export default App;
