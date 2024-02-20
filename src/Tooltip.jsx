import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ sentiment }) => {
  return (
    <div className="tooltip">
      <p>{sentiment}</p>
    </div>
  );
};

Tooltip.propTypes = {
  sentiment: PropTypes.string.isRequired,
};

export default Tooltip;


