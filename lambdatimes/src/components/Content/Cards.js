import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';




class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   return (
      <div className="cards-container">
        {this.props.cards.map((c, i )=> <Card card={c} key={i}/> )}
      </div>
    ) 
  }
  
}


Cards.propTypes = {
  cards: PropTypes.array,
}

export default Cards;