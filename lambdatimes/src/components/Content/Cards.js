import React, { Component } from 'react';
import Card from './Card';


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

// Make sure you include prop types for all of your incoming props

export default Cards;