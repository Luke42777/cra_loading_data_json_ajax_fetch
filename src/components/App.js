
import './App.css';
import React,{Component} from 'react'

class App extends Component {
  state = { 
    words:  [
      {
        "id": 1,
        "en": "dog",
        "fr": "chien"
      },
      {
        "id": 2,
        "en": "cat",
        "fr": "chat"
      },
      {
        "id": 3,
        "en": "boar",
        "fr": "sanglier"
      }
    ]
   } 
  render() { 
    const words = this.state.words.map(word => (
      <div key={word.id}>
        <h2>{word.en}</h2>
        <h1>{word.fr}</h1>
      </div>
    ));
    return (
      <div>{words}</div>
    );
  }
}
 
export default App;
