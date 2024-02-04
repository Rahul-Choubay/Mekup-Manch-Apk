// TopArtists.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtistDetails from './ArtistDetails'; // Import the new component

const ArtistCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 18vw;

  img {
    width: 100%;
    height: 30vh;
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
  const { artistId } = useParams();
  const [topArtists, setTopArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:6700/register-list');
        const data = await response.json();
        setTopArtists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewProfile = async (artist) => {
    try {
      const response = await fetch(`http://localhost:6700/register-list/${artist._id}`);
      const data = await response.json();
      setSelectedArtist(data);
      navigate(`/artist/${artist._id}`);
    } catch (error) {
      console.error('Error fetching artist details:', error);
    }
  };

  return (
    <div style={{ width: '98.5vw', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: "center", textAlign: "center", alignItems: "center" }}>
      <h2 style={{ justifyContent: "center", textAlign: "center" }}>Top Artists</h2>

      <div className="artist-cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {topArtists.map((artist, index) => (
          <ArtistCard key={artist._id}>
            <img src="Groom1.jpeg" alt={artist.username} />
            <h3>{`#${index + 1} ${artist.username}`}</h3>
            <p>{`${artist.city}, ${artist.state}`}</p>
            <p>{`Bridal Price: $${artist.services?.priceBridalMakeup || 'N/A'}`}</p>
            <p>{`Engagement Price: $${artist.services?.priceEngagementMakeup || 'N/A'}`}</p>
            <button onClick={() => handleViewProfile(artist)}>View Profile</button>
          </ArtistCard>
        ))}
      </div>

      {artistId && <ArtistDetails artistId={artistId} />} {/* Use the new component with artistId prop */}
    </div>
  );
};

export default TopArtists;
