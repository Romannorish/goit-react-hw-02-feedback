import React from "react";
import Section from "./Section";
import FeedbackOptions from "./feedbackOptions";
import Statistics from "./Statistics";
import Notification from './Notification';



export class  App extends  React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  positivePercentage = null;

  addFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1};
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const { total } = this;
    this.positivePercentage = parseInt((good / total) * 100);
  };


  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    const { total, positivePercentage } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions  
           options={Object.keys(this.state)} 
           onLeaveFeedback={this.addFeedback} 
          />
        </Section>
          
        <Section title="Statistics">
          {total ? (
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
           />
          ) : (
            <Notification message='There is no feedback'></Notification>
          )}
        </Section>
      </>
    );
  }

}

