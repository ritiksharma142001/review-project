import React from 'react';

function ReviewList({ data }) {
  // Function to generate stars based on the rating score
  const generateStars = (ratingScore, starSize) => {
    const stars = [];
    // Loop to create star elements based on the rating score
    for (let i = 0; i < 10; i++) {
      if (i < ratingScore) {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2605'}</span>); // Yellow star (Unicode character for black star)
      } else {
        stars.push(<span key={i} style={{ color: 'gold', fontSize: starSize }}>{'\u2606'}</span>); // Empty star (Unicode character for white star)
      }
    }
    return stars;
  };

  return (
    <div>
      {data.map(item => (
        <div key={item.review_id}>
          <p><b>{item.reviewer_name}</b> wrote a review at <b>{item.source.name}</b></p>
          <div>{generateStars(item.rating_review_score, '20px')} &nbsp; &nbsp;&nbsp; {item.date}</div> {/* Adjust the size as needed */}
          <p>{item.content}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;

