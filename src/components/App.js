import Word from './Word.js'
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  }
  componentDidMount() {
    setTimeout(this.fetchData.bind(this), 3000)
  }
  fetchData() {
    fetch('data/words.json')
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            words: data.words,
            isLoaded: true,
          }
        )
      })
  }
  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} eng={word.en} fre={word.fr} />
    ));
    return (
      <ul>{this.state.isLoaded ? words : "Loading data..."}</ul>
    );
  }
}

export default App;
