import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledTabs = Styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleSpan = Styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <Topics>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {props.tabs.map( (t, i) => 
        <Tab 
        tab={t} 
        key={i}
        selectedTab={props.selectedTab}
        selectTabHandler={props.selectTabHandler} /> )}
      </Topics>
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default Tabs;
