import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) { 
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); 
        setListings(data);
      })
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(() => {
        const updatedListings = listings.filter((listing) => listing.id !== id);
        setListings(updatedListings);
      });
  }

  
  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  console.log("All Listings:", listings);
  console.log("Filtered Listings:", filteredListings);

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id} 
            listing={listing}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
