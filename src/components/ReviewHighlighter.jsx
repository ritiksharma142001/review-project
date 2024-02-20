import React from 'react';
import PropTypes from 'prop-types';

const ReviewHighlighter = ({ review }) => {
  const { analytics, date, rating_review_score, reviewer_name, source } = review;

  const generateStars = (ratingScore, starSize) => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      if (i < ratingScore) {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2605'}</span>);
      } else {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2606'}</span>);
      }
    }
    return stars;
  };

  const renderHighlightedContent = () => {
    return analytics.map(({ sentiment, sentences, highlight_indices }, index) => (
      <span key={index} style={{ backgroundColor: SENTIMENT_COLORS[sentiment] }}>
        {sentences.map((sentence, i) => (
          <span key={i}>
            {sentence.split(' ').map((word, j) => (
              <span key={`${i}-${j}`}>
                {highlight_indices[index][i] && highlight_indices[index][i][j] ? (
                  <span style={{ backgroundColor: SENTIMENT_COLORS[sentiment] }}>
                    {word}
                  </span>
                ) : word}
                {' '}
              </span>
            ))}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div>
      <p><b>{reviewer_name}</b> wrote a review at <b>{source.name}</b></p>
      <div>{generateStars(rating_review_score, '20px')} &nbsp; &nbsp;&nbsp; {date}</div>
      <p>{renderHighlightedContent()}</p>
      <hr />
    </div>
  );
};

ReviewHighlighter.propTypes = {
  review: PropTypes.shape({
    analytics: PropTypes.arrayOf(PropTypes.shape({
      sentiment: PropTypes.oneOf(['Positive', 'Negative', 'Mixed', 'Neutral']).isRequired,
      sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
      highlight_indices: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))).isRequired,
    })),
    date: PropTypes.string.isRequired,
    rating_review_score: PropTypes.number.isRequired,
    reviewer_name: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const SENTIMENT_COLORS = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#e8bd6d3d',
  Neutral: '#eaf09b6b',
};

export default ReviewHighlighter;
