import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Give Feedback</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
