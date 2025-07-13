import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToyLikes }) {
  const toyCards = toys.map((toy) => (
    <ToyCard 
      key={toy.id} 
      toy={toy} 
      onDeleteToy={onDeleteToy}
      onUpdateToyLikes={onUpdateToyLikes}
    />
  ));
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
