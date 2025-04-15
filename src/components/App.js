// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to keep track of the fetched dog image.
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image from the API.
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // API returns an object with a property 'message' that is the image URL.
        setDogImage(data.message);
      })
      .catch((error) => console.error("Error fetching the dog image:", error));
  }, []); // Empty dependency array ensures this runs only once after the first render

  // If dogImage hasn't been set, display a loading message.
  if (!dogImage) {
    return <p>Loading...</p>;
  }

  // Once a dogImage URL is available, display it.
  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
