import React from "react";
import "./Jumbotron.css";

class Jumbotron extends React.Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 className="jumbotron-text">Clicky Game!</h1>
        <h4 className="jumbotron-text">
          Get points by clicking one of the images below, but don't click on the
          same image twice!
        </h4>
      </div>
    );
  }
}

export default Jumbotron;
