// before.js
import React, { useState } from 'react';
import './main.css'
import axios from 'axios';

function Graph() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleImageClick = (imageUrl) => {
    const randomString = Math.random().toString(36).substring(7); // Generate a random string
    const modifiedUrl = imageUrl + randomString; // Append the random string to the URL
    setSelectedImage(modifiedUrl);
  };

  return (
    <div>
      <h1>Graph</h1>
      {/* Add your content for the "Before" page */}
      <button onClick={openModal}>Open Modal</button>
        {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>X</button>
                    <div className="image-buttons">
                    <button onClick={() => handleImageClick('http://172.25.244.37:5000/performance_1?dummy=')}>Image 1</button>
                    <button onClick={() => handleImageClick('http://172.25.244.37:5000/performance_2?dummy=')}>Image 2</button>
                    </div>
                    <div className="image-container">
                    <center>
                    {selectedImage && <img src={selectedImage} width="1000px" height="500px" alt="Selected Image" />}
                    </center>
                    </div>
                </div>
                </div>
            )}
    </div>
  );
}

export default Graph;
