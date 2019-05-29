import React, {Component} from 'react';

class CardsList extends Component {
  constructor(props) {
    super(props)
    console.log(props.location.data);
    console.log(props.match.params.item);

    this.state = {
      data: this.props.location.data,
      item: this.props.match.params.item,
    }
  }

  render() {

    const itemsIncluded = this.state.data.filter(item => {
      return item.title.includes(this.state.item);
    }).map((item, index) => {
      return (
        <li key={index} className='tags'>
          <h3>{item.title}</h3>
          <h5>{item.body_html}</h5>
          <img src={item.image.src} alt='Product'/>
        </li>
      );
    })

    return(
      <div className='centerContainer'>
        <h1 className='title'>Welcome to CardsList!</h1>
        <h3 className='title'>{ this.state.item }</h3>
        <ul >
          { itemsIncluded }
        </ul>
      </div>

    )
  }

}




export default CardsList;
