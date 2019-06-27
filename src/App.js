import React from "react";
import Navbar from "./components/Navbar/Navbar";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import CharacterCards from "./components/CharacterCards/CharacterCards";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  };

  render() {
    for (var i = 0; i < characters.length; i++) {
      return (
        <div>
          <Navbar score={this.state.score} highScore={this.state.highScore} />
          <Jumbotron />
          <div className="container">
            {this.state.characters.map(card => (
              <CharacterCards image={card.image} />
            ))}
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
