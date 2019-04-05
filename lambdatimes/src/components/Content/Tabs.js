import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( (t, i) => <Tab tab={t} key={i} /> )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
