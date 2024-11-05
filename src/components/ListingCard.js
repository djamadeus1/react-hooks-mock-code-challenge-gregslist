import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false); 

  function handleClick() {
    onDelete(listing.id);
  }

  function toggleFavorite() {
    setIsFavorited((prev) => !prev); 
  }

  return (
    <li className="card">
      <div className="image">
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <strong>{listing.description}</strong>
        <span>{listing.location}</span>
        <button onClick={toggleFavorite} className="favorite-button">
          {isFavorited ? "⭐" : "☆"} {}
        </button>
        <button onClick={handleClick} className="delete-button">
          🗑️
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
