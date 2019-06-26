import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft">Test Your Memory</li>
          <li className="itemCenter" />
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
