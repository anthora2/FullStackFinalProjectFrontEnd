import React, { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import SearchBar from "./SearchBar";
import apartment1 from "../images/default_apartment_img.jpg";
import apartment2 from "../images/default.jpeg";
import apartment3 from "../images/default2.jpeg";
import apartment4 from "../images/default3.webp";
import apartment5 from "../images/default4.jpeg";
import apartment6 from "../images/default5.jpeg";

function ApartmentGrid() {
  const [history, setHistory] = useState("");
  const [showPopularSearches, setShowPopularSearches] = useState(false);

  const apartments = [
    {
      id: 1,
      picture: apartment1,
      address: "123 Main St",
      comments: [{ user: "John Doe", text: "Nice apartment!" }],
    },
    {
      id: 2,
      picture: apartment2,
      address: "456 Elm St",
      comments: [{ user: "Jane Smith", text: "Great location!" }],
    },
    {
      id: 3,
      picture: apartment3,
      address: "789 Oak St",
      comments: [{ user: "Alice Johnson", text: "Beautiful view!" }],
    },
    {
      id: 4,
      picture: apartment4,
      address: "1011 Pine St",
      comments: [{ user: "Bob Williams", text: "Spacious living room!" }],
    },
    {
      id: 5,
      picture: apartment5,
      address: "1213 Cedar St",
      comments: [{ user: "Emily Brown", text: "Love the kitchen!" }],
    },
    {
      id: 6,
      picture: apartment6,
      address: "1415 Maple St",
      comments: [{ user: "Michael Davis", text: "Cozy bedroom!" }],
    },
  ];

  const handleClick = async () => {
    const apiUrl = "http://127.0.0.1:8000/members/";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setHistory(data.output);
      setShowPopularSearches(!showPopularSearches); // Toggle popular searches visibility
      console.log("API response:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 style={styles.heading}>Start Reviewing, Browsing, or Searching!</h1>
        <div style={styles.searchBar}>
          <SearchBar />
          <button
            className="bg-white p-2 rounded-full font-semibold hover:scale-[1.05] duration-200"
            onClick={handleClick}
          >
            Popular Searches
          </button>
        </div>
        {showPopularSearches && ( // Conditionally render popular searches box
          <div style={styles.popularSearches}>
            <h2>Popular Searches</h2>
            <p>{history}</p>
          </div>
        )}
        <div style={styles.grid}>
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
        <div style={styles.loadMore}>
          <button style={styles.button}>Load More Apartments</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f7fafc",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    paddingTop: "4rem",
    color: "#4a5568",
    textAlign: "center",
  },
  searchBar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  popularSearches: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "1rem",
    marginTop: "1rem",
    backgroundColor: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
  },
  loadMore: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4299e1",
    color: "white",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#3182ce",
  },
};

export default ApartmentGrid;
