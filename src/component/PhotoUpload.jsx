import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoUpload = () => {
  const { artistId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  // Function to handle photo upload
  const handlePhotoUpload = async () => {
    try {
      if (!photo) {
        console.error('No photo selected for upload');
        return;
      }
  
      const formData = new FormData();
      formData.append('photo', photo);
  
      // Make a POST request to upload the photo
      await fetch(`http://localhost:6700/upload/${artistId}`, {
        method: 'POST',
        body: formData
      });
  
      // Refresh the list of photos after upload
      fetchPhotos();
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
  

  // Function to fetch user's photos
  const fetchPhotos = async () => {
    try {
      if (!artistId) {
        console.error('Artist ID is not provided');
        return;
      }

      const response = await fetch(`http://localhost:6700/photos/${artistId}`);
      if (!response.ok) {
        console.error('Failed to fetch photos:', response.status);
        return;
      }

      const data = await response.json();
      if (!data.photos || !Array.isArray(data.photos)) {
        console.error('Invalid data format for photos:', data);
        return;
      }

      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  // Fetch photos when the component mounts or when artistId changes
  useEffect(() => {
    fetchPhotos();
  }, [artistId]);

  return (
    <div>
      <h2>Photo Upload</h2>
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <button onClick={handlePhotoUpload}>Upload Photo</button>

      <h2>Your Photos</h2>
      <div>
        {photos && photos.map((photoUrl, index) => (
          <img key={index} src={photoUrl} alt={`Photo ${index}`} style={{ width: '200px', height: 'auto' }} />
        ))}
      </div>
    </div>
  );
};

export default PhotoUpload;
