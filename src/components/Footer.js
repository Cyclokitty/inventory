import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {

  getYear = () => {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <div className="App">
        <header className="App-footer">
          <h4>made by <a href='https://cyclokitty.github.io' rel='noopener noreferrer' target='_blank'>Laura Veee</a> ©{this.getYear()}</h4>
        </header>
      </div>
    );
  }



}

export default Footer;
