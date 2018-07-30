import React from 'react';
import logo from '../assets/picture.jpg';
import s from '../content/strings';
import './Header.css';
import socials from '../content/socials';

export default () => (
  <header className="App-header">
    <img src={logo} className="App-picture" alt="logo"/>
    <h1 className="App-title">{s.header}</h1>
    <h2 className="App-subtitle">{s.subtitle}</h2>
    {socials.map(i =>
      <a href={i.link}>
        <img src={i.logo} className="Header-socialLink"/>
      </a>
    )}
  </header>
);

