import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStateCount = stateCount => {
    this.setState(prevState => ({ [stateCount]: prevState[stateCount] + 1 }));
  };
  render() {
    return (
      <container>
        {' '}
        <section title=" Please leave feedback">
          <button onClick={() => this.updateStateCount('good')}>good</button>
          <button onClick={() => this.updateStateCount('neutral')}>
            neutral
          </button>
          <button onClick={() => this.updateStateCount('bad')}>bad</button>
        {/* {this.state.good}
        {this.state.neutral}
        {this.state.bad} */}
        </section>
      </container>
    );
  }
}

