// TopArtists.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ArtistCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 300px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
  }
`;

const TopArtists = () => {
  const navigate = useNavigate();
  const [topArtists, setTopArtists] = useState([
    { id: 1, name: 'Artist1', state: 'State1', city: 'City1', image: 'artist1.jpg', bridalPrice: 1000, groomPrice: 800, profile: { paymentPolicy: 'Specify payment policy details here.', paymentMethods: 'Specify accepted payment methods here.', productsUsed: 'Specify the brand, product type, and price details here.' }},
    { id: 2, name: 'Artist2', state: 'State2', city: 'City2', image: 'artist2.jpg', bridalPrice: 1200, groomPrice: 900, profile: { paymentPolicy: 'Specify payment policy details here.', paymentMethods: 'Specify accepted payment methods here.', productsUsed: 'Specify the brand, product type, and price details here.' }},
    // Add more dummy data as needed
  ]);

  const handleViewProfile = (artist) => {
    console.log('Selected Artist:', artist);
    navigate(`/artist/${artist.id}`); // Use navigate instead of history.push
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div style={{width:"98.5vw", height:"31vh",}}>

   
      <h2>Top Artists</h2>

      <div className="artist-cards" style={{display:"flex", flexDirection:"row"}}>
        {topArtists.map((artist) => (
          <ArtistCard key={artist.id}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.city}, {artist.state}</p>
            <p>Bridal Price: ${artist.bridalPrice}</p>
            <p>Groom Price: ${artist.groomPrice}</p>

            <button onClick={() => handleViewProfile(artist)}>View Profile</button>
          </ArtistCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TopArtists;
