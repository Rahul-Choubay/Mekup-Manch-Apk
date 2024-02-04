import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const [artistDetails, setArtistDetails] = useState(null); // or useState({}) depending on your preference

  useEffect(() => {
    console.log('ArtistDetails component mounted with artistId:', artistId);

    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`http://localhost:6700/register-list/${artistId}`);
        console.log('Response status:', response.status); // Log the status
        if (!response.ok) {
          throw new Error('Failed to fetch artist details');
        }
        const data = await response.json();
        setArtistDetails(data);
      } catch (error) {
        console.error('Error fetching artist details:', error);
      }
    };

    fetchArtistDetails();
  }, [artistId]);

  return (
    <div>
      {artistDetails ? (
        <div>
   
          <h2>Selected Artist Details</h2>
      <p>Username: {artistDetails.username}</p>
      <p>Email: {artistDetails.email}</p>
      
      <p>Date of Birth: {artistDetails.dateOfBirth}</p>
      <p>State: {artistDetails.state}</p>
      <p>City: {artistDetails.city}</p>
      <p>About: {artistDetails.about}</p>

      <h3>Services</h3>
      <p>Bridal Makeup: {artistDetails.services?.bridalMakeup ? 'Available' : 'Not Available'}</p>
      <p>Airbrush: {artistDetails.services?.airbrush ? 'Available' : 'Not Available'}</p>
      <p>Engagement Makeup: {artistDetails.services?.engagementMakeup ? 'Available' : 'Not Available'}</p>
      <p>Price for Bridal Makeup: ${artistDetails.services?.priceBridalMakeup || 'N/A'}</p>
      <p>Price for Engagement Makeup: ${artistDetails.services?.priceEngagementMakeup || 'N/A'}</p>

      <h3>Payment Details</h3>
      <p>Advance Payment: ${artistDetails.paymentDetails?.advancePayment || 'N/A'}</p>
      <p>After Work Payment: ${artistDetails.paymentDetails?.afterWorkPayment || 'N/A'}</p>
      <p>Payment Methods: {artistDetails.paymentDetails?.paymentMethods?.join(', ') || 'N/A'}</p>

      <p>Products Used: {artistDetails.productsUsed || 'N/A'}</p>
          {/* Add other properties as needed */}
        </div>
      ) : (
        <p>Error or Loading artist details...</p>
      )}
    </div>
  );
};

export default ArtistDetails;
