import React from 'react';
import logo from '../assets/picture.jpg';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import mail from '../assets/icons/mail.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';

import s from '../content/strings'
import './Header.css'

export default () => (
      <header className="App-header">
        <img src={logo} className="App-picture" alt="logo"/>
        <h1 className="App-title">{s.header}</h1>
        <h2 className="App-subtitle">{s.subtitle}</h2>
        <img src={github} className="Header-socialLink" onClick={() => window.location="https://github.com/osdnk"}/>
        <img src={linkedin} className="Header-socialLink"/>
        <img src={mail} className="Header-socialLink"/>
        <img src={twitter} className="Header-socialLink"/>
        <img src={instagram} className="Header-socialLink"/>
        <img src={facebook} className="Header-socialLink"/>
      </header>
);

