import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import mainpage from './images/mainpage.png';
import home from './images/home.png';
import homes from './images/home-s.png';
import about from './images/about.png';
import abouts from './images/about-s.png';
import github from './images/github.png';
import contact from './images/contact.png';
import contacts from './images/contact-s.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png';
import twitter from './images/twitter.png';
import matcha from './images/matcha.gif';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className= "page">
      <div className = "background-image">
        <img id = "mainpage" src = {mainpage}></img>
        <a href  = "/"><img id = "home" src ={homes}></img></a>
        <a href = "/about"><img id = "about" src ={about}></img></a>
        <a href = "https://github.com/arush-mehrotra/" target="_blank"><img id = "github" src ={github}></img></a>
        <a href = "/contact"><img id = "contact" src ={contact}></img></a>
        <h2>home</h2>
        <h1>developer. tech enthusiast. social justice advocate.</h1>
        <img id = "matcha" src = {matcha}></img>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className= "page">
      <div className = "background-image">
        <img id = "mainpage" src = {mainpage}></img>
        <a href  = "/"><img id = "home" src ={home}></img></a>
        <a href = "/about"><img id = "about" src ={abouts}></img></a>
        <a href = "https://github.com/arush-mehrotra/" target="_blank"><img id = "github" src ={github}></img></a>
        <a href = "/contact"><img id = "contact" src ={contact}></img></a>
        <h2>about</h2>
        <p>I am a rising sophomore at the University of Pennsylvania intending to major in Computer Science. I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the structural inequities that permeate the criminal justice system and want to develop human-centered technology to address these disparities. Please feel free to reach out to me via the contact page!</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className= "page">
      <div className = "background-image">
        <img id = "mainpage" src = {mainpage}></img>
        <a href  = "/"><img id = "home" src ={home}></img></a>
        <a href = "/about"><img id = "about" src ={about}></img></a>
        <a href = "https://github.com/arush-mehrotra/" target="_blank"><img id = "github" src ={github}></img></a>
        <a href = "/contact"><img id = "contact" src ={contacts}></img></a>
        <h3>contact</h3>
        <div class = "row">
          <a href = "https://www.linkedin.com/in/arush-mehrotra/" target="_blank"><img id = "linkedin" src = {linkedin}></img></a>
          <a href = "mailto:arushm@sas.upenn.edu"><img id = "email" src = {email}></img></a>
          <a href = "https://twitter.com/MehrotraArush" target="_blank"><img id = "twitter" src = {twitter}></img></a>
        </div>
      </div>
    </div>
  );
}