import React from 'react';
import meanddoge from '../assets/meanddoge.jpg';
import s from '../content/strings';
import './Header.css';
import socials from '../content/socials';
import { NavLink } from 'react-router-dom';

export default () => (
  <header className="App-header" id="App-header">
    <img src={meanddoge} className="App-picture" alt="logo"/>
    <h1 className="App-title">{s.header}</h1>
    <h2 className="App-subtitle">{s.pronouns}</h2>
    <h2 className="App-subtitle">{s.subtitle}</h2>
    {/*<div>*/}
    {/*</div>*/}
    {/*<div className="Header-LinksBar">*/}
    {/*  <NavLink exact to='/' className="App-NavLink" activeClassName="App-activeNavLink">{s.hi}</NavLink>*/}
    {/*  <NavLink exact to='/about-me' className="App-NavLink" activeClassName="App-activeNavLink">{s.about}</NavLink>*/}
    {/*  <NavLink to='/curriculum' className="App-NavLink" activeClassName="App-activeNavLink">{s.curriculum}</NavLink>*/}
    {/*  <NavLink to='/projects' className="App-NavLink" activeClassName="App-activeNavLink">{s.projects}</NavLink>*/}
    {/*  <NavLink to='/technologies' className="App-NavLink" activeClassName="App-activeNavLink">{s.technologies}</NavLink>*/}
    {/*</div>*/}
  </header>
);

