import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Fetch from './Fetch';
import './App.css';

class App extends Component {
  getYear = () => {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    let year = this.getYear();
    return (
      <div>
        <Header />
        <Fetch />
        <Footer date={year}/>
      </div>
    );
  }

}

export default App;
