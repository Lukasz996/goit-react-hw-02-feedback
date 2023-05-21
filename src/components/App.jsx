import { Component } from 'react';
import { Container } from './ui/Container/Container';
import { Section } from './ui/Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStateCount = stateCount => {
    this.setState(prevState => ({ [stateCount]: prevState[stateCount] + 1 }));
  };

  totalCountFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good } = this.state;
    const total = this.totalCountFeedback();
    return good !== 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.entries(this.state);
    const total = this.totalCountFeedback();
    const positivePercentage = this.positivePercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title=" Please leave feedback">
          <FeedbackOptions
            options={options}
            leaveFeedback={this.updateStateCount}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              options={options}
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  };
};

/* <button onClick={() => this.updateStateCount('good')}>good</button>
<button onClick={() => this.updateStateCount('neutral')}>neutral</button>
<button onClick={() => this.updateStateCount('bad')}>bad</button>
{this.state.good}
{this.state.neutral}
{this.state.bad} */
