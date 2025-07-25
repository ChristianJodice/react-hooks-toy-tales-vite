import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToyCard from "./ToyCard";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  function deleteToy(toyId) {
    setToys(toys.filter(toy => toy.id !== toyId));
  }

  function updateToyLikes(toyId, newLikes) {
    setToys(toys.map(toy => 
      toy.id === toyId ? { ...toy, likes: newLikes } : toy
    ));
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onDeleteToy={deleteToy}
        onUpdateToyLikes={updateToyLikes}
      />
    </>
  );
}

export default App;
