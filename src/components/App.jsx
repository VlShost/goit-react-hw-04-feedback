import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
  };

  const totalFeedback = good + neutral + bad;

  const positivePercentage = Math.round((good * 100) / (good + bad + neutral));

  const options = { good, bad, neutral };
  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}
      />
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
