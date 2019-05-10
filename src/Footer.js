import React from 'react';
import './App.css';

const Footer = (props) => {
  return (
    <div className="App">
      <header className="App-footer">
        <h4>made by <a href='https://cyclokitty.github.io' rel='noopener noreferrer' target='_blank'>Laura Veee</a> ©{props.date}</h4>
      </header>
    </div>
  );
}

export default Footer;
