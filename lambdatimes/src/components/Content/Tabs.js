import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( (t, i) => 
        <Tab 
        tab={t} 
        key={i}
        selectedTab={props.selectedTab}
        selectTabHandler={props.selectTabHandler} /> )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default Tabs;
