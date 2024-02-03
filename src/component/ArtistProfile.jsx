// ArtistProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistProfile = () => {
  const { id } = useParams(); // Get the artist ID from the route parameters

  // Fetch artist data based on the ID (replace with your fetching logic)
  const artist = {
    id: Number(id),
    name: `Artist${id}`,
    state: `State${id}`,
    city: `City${id}`,
    image: `artist${id}.jpg`,
    bridalPrice: 1000 + id * 100,
    groomPrice: 800 + id * 100,
    profile: {
      paymentPolicy: 'Specify payment policy details here.',
      paymentMethods: 'Specify accepted payment methods here.',
      productsUsed: 'Specify the brand, product type, and price details here.',
    },
  };

  return (
    <div>
      <h2>{artist.name}'s Profile</h2>
      <h2>name{artist.name}</h2>
      <h4>Payment Policy</h4>
      <p>{artist.profile.paymentPolicy}</p>

      <h4>Payment Methods</h4>
      <p>{artist.profile.paymentMethods}</p>

      <h4>Products Used</h4>
      <p>{artist.profile.productsUsed}</p>
    </div>
  );
};

export default ArtistProfile;
