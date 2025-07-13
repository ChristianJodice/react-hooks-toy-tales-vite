import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToyLikes }) {
  const handleLike = () => {
    const newLikes = toy.likes + 1;
    
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: newLikes,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      onUpdateToyLikes(toy.id, newLikes);
    })
    .catch((error) => {
      console.error("Error updating toy likes:", error);
    });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(() => {
      onDeleteToy(toy.id);
    })
    .catch((error) => {
      console.error("Error deleting toy:", error);
    });
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
