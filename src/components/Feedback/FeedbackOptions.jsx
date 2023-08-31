import React from 'react';
import styles from './Feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Give Feedback</h2>
      {options.map(option => (
        <button class={styles.button} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
