import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledTab = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row; 
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover{ text-decoration: underline;
  } 
`;

const ActiveTab = Styled.div`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;


const Tab = props => {
  let selectedClass = 'tab'
  if (props.tab === props.selectedTab) {
    selectedClass = 'tab active-tab'
  }
  return (
    <StyledTab
      className={selectedClass}
      onClick={() => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};


Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,  
  selectTabHandler: PropTypes.func,
  toUpperCase: PropTypes.func,
}

export default Tab;


