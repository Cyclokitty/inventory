import React, {Component} from 'react';
import Fetch from './Fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      year: this.getYear()
    }

  }

  getYear = () => {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <div>
        <Fetch date={this.state.year}/>
      </div>
    );
  }

}

export default App;
