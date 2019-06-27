import React from "react";
import "./CharacterCards.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.Counter(props.id)}>
      <div className="img-container">
        <img alt="SpongeBob" src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
