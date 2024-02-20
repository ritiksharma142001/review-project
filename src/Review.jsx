import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => {
  return (
    <div >
      <div className="review">
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
