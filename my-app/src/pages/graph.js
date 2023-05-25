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
    setSelectedImage(imageUrl);
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
                    <button onClick={() => handleImageClick('image-url-1')}>Image 1</button>
                    <button onClick={() => handleImageClick('image-url-2')}>Image 2</button>
                    </div>
                    <div className="image-container">
                    {selectedImage && <img src={selectedImage} alt="Selected Image" />}
                    </div>
                </div>
                </div>
            )}
    </div>
  );
}

export default Graph;
