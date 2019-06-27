import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <h4 className="col-md-4">Clicky Game</h4>
        <h4 className="col-md-4">Click an image to begin!</h4>
        <h4 className="col-md-4">
          Score: {this.props.score} || High Score: {this.props.highScore}
        </h4>
      </nav>
    );
  }
}

export default Navbar;
