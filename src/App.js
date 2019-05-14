import React, {Component} from 'react';
import Fetch from './Fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Fetch />
      </div>
    );
  }

}

export default App;
