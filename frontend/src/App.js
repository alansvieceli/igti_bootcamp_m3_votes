import React, { Component } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previousVotes: [],
      previousPercentege: [],
    };

    this.interval = null;
  }

  async componentDidMount() {
    this.interval = setInterval(async () => {
      const res = await fetch('http://localhost:8080/votes');
      const json = await res.json();

      const previousVotes = this.state.candidates.map(({ id, votes }) => {
        return { id, votes };
      });
      const previousPercentege = this.state.candidates.map(
        ({ id, percentage }) => {
          return { id, percentage };
        }
      );

      this.setState({
        candidates: json.candidates,
        previousVotes,
        previousPercentege,
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { candidates, previousVotes, previousPercentege } = this.state;

    if (candidates.length === 0) {
      return <Spinner description="Carregando" />;
    }

    return (
      <div className="container">
        <Header title="Votação" />
        <Candidates
          data={candidates}
          previousVotes={previousVotes}
          previousPercentege={previousPercentege}
        />
      </div>
    );
  }
}
