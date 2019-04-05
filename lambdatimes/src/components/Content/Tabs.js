import React from 'react';
import Tab from './Tab';

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

// Make sure to use PropTypes to validate your types!
export default Tabs;
