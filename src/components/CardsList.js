import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class CardsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.location.data,
      item: this.props.match.params.item,
      tags: this.props.location.tags,
    }
    console.log(this.state.tags);
  }

  render() {
    const itemsIncluded = this.state.data.filter(item => {
      return item.title.includes(this.state.item);
    }).map((item, index) => {
      return (
        <li key={index} className='items row'>
          <div className='row_cell'>
            <img src={item.image.src} alt='Product'/>
          </div>
          <div className='row_cell'>
            <h3>{item.title}</h3>
          <h5>{item.body_html}</h5>
          <h4>Styles Available:</h4>
          <ul>
            {
              item.variants.map((thing, index) => {
                return (
                  <li key={index}>
                    <p>Colour: {thing.title} ${thing.price} In stock: {thing.inventory_quantity}</p>
                  </li>
                )
              })
            }
          </ul>
          </div>


        </li>
      );
    })

    return(
      <div>
        <Header />
          <div className='centerContainer'>
              <h3 className='title'>{ this.state.item }</h3>
              <ul className='cardItems'>
                { itemsIncluded }
              </ul>
          </div>
        <Footer />
      </div>
    )
  }

}




export default CardsList;
