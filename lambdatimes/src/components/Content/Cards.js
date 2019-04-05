import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const CardsContainer = Styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
  }
`;




class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   return (
      <CardsContainer>
        {this.props.cards.map((c, i )=> <Card card={c} key={i}/> )}
      </CardsContainer>
    ) 
  }
  
}


Cards.propTypes = {
  cards: PropTypes.array,
}

export default Cards;