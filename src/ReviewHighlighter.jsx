


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

const ReviewHighlighter = ({ review }) => {
  const { analytics, date, rating_review_score, reviewer_name, source } = review;
  const [tooltipContent, setTooltipContent] = useState(null);

  const handleMouseEnter = (sentiment) => {
    setTooltipContent(sentiment);
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  


  const generateStars = (ratingScore, starSize) => {
    const stars = [];
    const fullStars = Math.floor(ratingScore);
    const hasHalfStar = ratingScore % 1 !== 0;
  
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2605'}</span>);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u00bd'}</span>);
      } else {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2606'}</span>);
      }
    }
    return stars;
  };

  const sentimentColors = {
    Positive: '#D9F2DD',
    Negative: '#F2DBD9',
    Mixed: '#e8bd6d3d',
    Neutral: '#eaf09b6b',
  };

  return (
    <div className="review-highlighter review-container">
      <p><b>{reviewer_name}</b> wrote a review at <b>{source.name}</b></p>
      <div>{generateStars(rating_review_score, '25px')} &nbsp; &nbsp;&nbsp; {date}</div>
      <div className="highlighted-sentence">
        {analytics.map(({ sentiment, sentences }, index) => (
          sentences.map((sentence, sentenceIndex) => (
            <span
              key={`${index}-${sentenceIndex}`}
              className="sentence"
              style={{
                backgroundColor: sentimentColors[sentiment],
                display: 'inline-block',
                whiteSpace: 'nowrap',
                padding: '5px',
                margin: '5px',
              }}
              onMouseEnter={() => handleMouseEnter(sentiment)}
              onMouseLeave={handleMouseLeave}
            >
              {sentence}
            </span>
          ))
        ))}
      </div>
      {tooltipContent && <Tooltip sentiment={tooltipContent} />}
    </div>
  );
};

ReviewHighlighter.propTypes = {
  review: PropTypes.shape({
    analytics: PropTypes.arrayOf(PropTypes.shape({
      sentiment: PropTypes.oneOf(['Positive', 'Negative', 'Mixed', 'Neutral']).isRequired,
      sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    date: PropTypes.string.isRequired,
    rating_review_score: PropTypes.number.isRequired,
    reviewer_name: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewHighlighter;

