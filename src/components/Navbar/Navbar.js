import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h4 id="brand" className="col-md-4">
          Clicky Game
        </h4>
        <h4 className="col-md-4">{this.props.header}</h4>
        <h4 id="scores" className="col-md-4">
          Score: {this.props.score} || High Score: {this.props.highScore}
        </h4>
      </nav>
    );
  }
}

export default Navbar;
