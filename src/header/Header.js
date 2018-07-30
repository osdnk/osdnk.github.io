import React from 'react';
import logo from '../assets/picture.jpg';
import s from '../content/strings';
import './Header.css';
import socials from '../content/socials';
import { NavLink } from 'react-router-dom';

export default () => (
  <header className="App-header">
    <img src={logo} className="App-picture" alt="logo"/>
    <h1 className="App-title">{s.header}</h1>
    <h2 className="App-subtitle">{s.subtitle}</h2>
    <div>
    {socials.map((i, ind) =>
      <a href={i.link} key={`sm${ind}`}>
        <img src={i.logo} className="Header-socialLink" />
      </a>
    )}
    </div>
    <div>
    <NavLink exact to='/' className="App-NavLink" activeClassName="App-activeNavLink">{s.hi}</NavLink>
    <NavLink exact to='/about-me' className="App-NavLink" activeClassName="App-activeNavLink">{s.about}</NavLink>
    <NavLink to='/resume' className="App-NavLink" activeClassName="App-activeNavLink">{s.resume}</NavLink>
    <NavLink to='/projects' className="App-NavLink" activeClassName="App-activeNavLink">{s.projects}</NavLink>
    <NavLink to='/work' className="App-NavLink" activeClassName="App-activeNavLink">{s.work}</NavLink>
    </div>
  </header>
);

