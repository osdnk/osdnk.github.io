import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Curriculum from './curriculum/Curriculum';
import About from './about-me/About';
import Arts from './arts/Arts';
import Hire from './hire-me/Hire';
import Projects from './projects/Projects';
import Technologies from './technologies/Technologies';
import Hi from './hi/Hi';
import Enroll from './enroll-policy/Enroll-policy'
import meandtree from "./assets/meandtree.jpg";
import s from "./content/strings";

function ScrollToTopOnLocationChange() {
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null
}

function App() {
  return (
    <div>
      <div id="full"/>
      <Router>
        <div>
          <ScrollToTopOnLocationChange/>
          <Switch>
            <Route path="/hire-me" component={Hire}/>
            <Route path="/">
              <div className="App" id="App">
                <div className="App-topBar"/>
                <p style={{ fontSize: 10, color: '#888' }}>click somewhere arund</p>

                <Header/>
                {/*<img src={meanddoge} className="App-picture" alt="logo"/>*/}
                {/*<h1 className="App-title">{s.header}</h1>*/}
                {/*<h2 className="App-subtitle">{s.subtitle}</h2>*/}
                <Route path="/arts" component={Arts}/>
                {/*<Route path="/about-me" component={About}/>*/}
                {/*<Route path="/curriculum" component={Curriculum}/>*/}
                {/*<Route path="/projects" component={Projects}/>*/}
                {/*<Route path="/technologies" component={Technologies}/>*/}
                <Route path="/enroll-policy" component={Enroll}/>
                <Route exact path="/" component={Hi}/>
                <img src={meandtree} className="App-picture-bottom" alt="meandtree"/>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

class Fountain {
  constructor() {
    this.limit = 35;
    this.particles = [];
    this.autoAddParticle = false;
    this.height = document.documentElement.clientHeight;
    this.sizes = [15, 20, 25, 35, 45];
    this.variants = [
      '🌈', '🎉', '🌈', '🤗', '🐦'
    ];
    this.addHandlers();
    this.loop();
  }

  loop() {
    if (this.autoAddParticle && this.particles.length < this.limit) {
      const component = document.getElementById("App-header")
      if (component) {
        this.height = component.offsetHeight - 50;
      }
      this.createParticle();
    }

    this.updateParticles();

    requestAnimationFrame(this.loop.bind(this));
  }

  addHandlers() {
    const isTouchInteraction = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    const tap = isTouchInteraction ? 'touchstart' : 'mousedown';
    const tapEnd = isTouchInteraction ? 'touchend' : 'mouseup';
    const move = isTouchInteraction ? 'touchmove' : 'mousemove';

    document.addEventListener(move, (e) => {
      this.mouseX = e.pageX || e.touches && e.touches[0].pageX;
      this.mouseY = e.pageY || e.touches && e.touches[0].pageY;
    }, {passive: false});

    document.addEventListener(tap, (e) => {
      this.mouseX = e.pageX || e.touches[0].pageX;
      this.mouseY = e.pageY || e.touches[0].pageY;
      this.autoAddParticle = true;
    });

    document.addEventListener(tapEnd, () => {
      this.autoAddParticle = false;
    });

    document.addEventListener('mouseleave', () => {
      this.autoAddParticle = false;
    });
  }

  createParticle() {

    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    const speedHorz = Math.random() * 10;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = ((Math.random() * 35)) * (Math.random() <= .5 ? -1 : 1);
    const top = (this.mouseY - size / 2);
    const left = (this.mouseX - size / 2);
    const direction = Math.random() <= .5 ? -1 : 1;

    const particle = document.createElement('span');
    particle.innerHTML = this.variants[Math.floor(Math.random() * this.variants.length)];
    particle.classList.add('particle');

    particle.setAttribute("style", `
      font-size: ${size}px;
      top: ${top}px;
      left: ${left}px;
      transform: rotate(${spinVal}deg);
    `);

    const App = document.getElementById("App")
    if (App) {
      App.appendChild(particle);
    }

    this.particles.push({
      element: particle,
      size,
      speedHorz,
      speedUp,
      spinVal,
      spinSpeed,
      top,
      left,
      direction,
    });
  }

  updateParticles() {
    this.particles.forEach((p) => {
      p.left = p.left - (p.speedHorz * p.direction);
      p.top = p.top - p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal = p.spinVal + p.spinSpeed;

      if (p.top >= this.height + p.size) {
        this.particles = this.particles.filter((o) => o !== p);
        p.element.remove();
      }

      p.element.setAttribute("style", `
        position: absolute;
        will-change: transform;
        pointer-events: none;
        top: ${p.top}px;
        left: ${p.left}px;
        font-size: ${p.size}px;
        transform:rotate(${p.spinVal}deg);
      `);
    });
  }
}

new Fountain();
