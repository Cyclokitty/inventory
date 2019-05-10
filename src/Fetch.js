import React, {Component} from 'react';
import './App.css';

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: [],
      data: [],
      tags: [],
    };
  }

  callApi =() => {
    fetch(process.env.REACT_APP_URL)
      .then(res => res.text())
      .then(res => this.setState({apiResponse: JSON.parse(res)}))
      .then(res => console.log(this.state.apiResponse.products))
      .then(res => {
      this.setState({data : this.state.apiResponse.products})
    })
    .then(res => this.setState({tags: this.getUniqueTags(this.state.data)
    }))
    .catch(err => err);
  }

  getUniqueTags = (data) => {
    let productCategories = new Set();
    this.state.data.map(thing => {
    let breakDown = thing.tags.split(',');
    breakDown.map(tagItem => {
      return productCategories.add(tagItem.trim());
    });
    return breakDown;
    });
    let productItems = [...productCategories].sort();
    return productItems;
}


  componentDidMount() {
    this.callApi();
  }

  render() {


    return (
      <div className='centerContainer'>
        <h4 className='title'>Store Inventory: Tags</h4>

          {this.state.tags.map((item, index) =>
           <h5 className='tags' key={index}>{item}</h5>)}

      </div>
    )
  }
}



export default Fetch;
