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
            <div className="row">
              <CharacterCards image={characters[0].image} />
              <CharacterCards image={characters[1].image} />
              <CharacterCards image={characters[2].image} />
              <CharacterCards image={characters[3].image} />
            </div>
            <CharacterCards image={characters[4].image} />
            <CharacterCards image={characters[5].image} />
            <CharacterCards image={characters[6].image} />
            <CharacterCards image={characters[7].image} />
            <CharacterCards image={characters[8].image} />
            <CharacterCards image={characters[9].image} />
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
