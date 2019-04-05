import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  let selectedClass = 'tab'
  if (props.tab === props.selectedTab) {
    selectedClass = 'tab active-tab'
  }
  return (
    <div
      className={selectedClass}
      onClick={() => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,  
  selectTabHandler: PropTypes.func,
  toUpperCase: PropTypes.func,
}

export default Tab;


