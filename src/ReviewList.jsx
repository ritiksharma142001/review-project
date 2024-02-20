import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = ({ data }) => {
  return (
    <div>
      {data.map((review, index) => (
        <div key={index}>
          <Review review={review} />
          <ReviewHighlighter review={review} />
        </div>
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
