import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoUpload = () => {
  
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const userId = userInfo ? userInfo._id : null;

  useEffect(() => {
    console.log('userId:', userId);
  }, [userId]);
  
  const handlePhotoUpload = async () => {
    try {
      if (!photo) {
        console.error('No photo selected for upload');
        return;
      }
  
      if (!userId) {
        console.error('User ID is not available');
        return;
      }
  
      const formData = new FormData();
      formData.append('userId', userId); // Include userId in the form data
      formData.append('photo', photo);
  
      const response = await fetch(`http://localhost:6700/upload/${userId}`, {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        console.error('Failed to upload photo:', response.status);
        const errorMessage = await response.text(); // Get the error message from the server
        console.error('Server error message:', errorMessage);
        return;
      }
  
      fetchPhotos(); // Call fetchPhotos after successful upload
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
  

  const fetchPhotos = async () => {
    try {
      if (!userId) {
        console.error('User ID is not provided');
        return;
      }
  
      const response = await fetch(`http://localhost:6700/photos/${userId}`);
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
  

  useEffect(() => {
    fetchPhotos();
  }, [userId]); // Fetch photos whenever userId changes

  return (
    <div>
      <h2>Photo Upload</h2>
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <button onClick={handlePhotoUpload}>Upload Photo</button>

      <h2>Your Photos</h2>
      <div>
  {photos && photos.map((photoUrl, index) => {
    console.log("Photo URL:", photoUrl); // Log photoUrl for debugging
    return (
      <img key={index} src={photoUrl} alt={`Photo ${index}`} style={{ width: '200px', height: 'auto' }} />
    );
  })}
</div>


    </div>
  );
};

export default PhotoUpload;
