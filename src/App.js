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
    highScore: 0,
    header: "Click an image to begin!"
  };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.characters.forEach(card => {
      card.count = 0;
    });
    this.setState({ header: "Incorrect! Try again?" });

    this.setState({ score: 0 });
    return true;
  };

  Counter = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        if (characters[i].count === 0) {
          this.setState({ header: "Click an image to begin!" });

          characters[i].count = characters[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.characters.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  };

  render() {
    for (var i = 0; i < characters.length; i++) {
      return (
        <div>
          <Navbar
            header={this.state.header}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <Jumbotron />
          <div className="container">
            {this.state.characters.map(card => (
              <CharacterCards
                Counter={this.Counter}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
