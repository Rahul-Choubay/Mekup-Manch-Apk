import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtistDetails from './ArtistDetails'; // Import the new component
import { Link } from 'react-router-dom';

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
    width: 48%;
    margin-left: 1%;
    border-radius:10px;
  }
`;

const TopArtists = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const [topArtists, setTopArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showAllArtists, setShowAllArtists] = useState(false);

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
      console.log('Artist profileImage:', data.profileImage);
      setSelectedArtist(data);
      navigate(`/artist/${artist._id}`);
    } catch (error) {
      console.error('Error fetching artist details:', error);
    }
  };

  return (
    <div style={{ width: '98.5vw', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: "center", textAlign: "center", alignItems: "center" }}>
      <h2 style={{ justifyContent: "center", textAlign: "center" }}>Top Artists</h2>

      <div className="artist-cards" style={{width: '97vw', height:"90vh", display: 'flex', flexWrap: 'wrap', justifyContent: "center", textAlign: "center", alignItems:"center", flexDirection:"column", marginBottom:"1rem", border:"5px solid pink", borderRadius:"3rem" }}>
      <div style={{display: 'flex', borderRadius:"2rem", background:"pink" , flexWrap: 'wrap', justifyContent: "center", textAlign: "center", alignItems:"center", flexDirection:"row"}}>
        {showAllArtists
          ? topArtists.map((artist, index) => (
              <ArtistCard key={artist._id} style={{borderRadius:"2rem", }}>
                <img src={`${artist.profileImage}`} alt={artist.username} />
                {/* Add console.log to check the profileImage URL */}
                {console.log('Artist profileImage:', artist.profileImage)}

                <h3>{`#${index + 1} ${artist.username}`}</h3>
                <p>{`${artist.city}, ${artist.state}`}</p>
                <p>{`Bridal Price: $${artist.services?.priceBridalMakeup || 'N/A'}`}</p>
                <p>{`Engagement Price: $${artist.services?.priceEngagementMakeup || 'N/A'}`}</p>
                <div>
                  <button onClick={() => handleViewProfile(artist)}>View Profile</button>
                  <Link to="/bookingform"><button>Book Now</button></Link>
                </div>
              </ArtistCard>
            ))
          : topArtists.slice(0, 2).map((artist, index) => (
              <ArtistCard key={artist._id}>
                <img src={`${artist.profileImage}`} alt={artist.username} />
                {/* Add console.log to check the profileImage URL */}
                {console.log('Artist profileImage:', artist.profileImage)}

                <h3>{`#${index + 1} ${artist.username}`}</h3>
                <p>{`${artist.city}, ${artist.state}`}</p>
                <p>{`Bridal Price: $${artist.services?.priceBridalMakeup || 'N/A'}`}</p>
                <p>{`Engagement Price: $${artist.services?.priceEngagementMakeup || 'N/A'}`}</p>
                <div>
                  <button onClick={() => handleViewProfile(artist)}>View Profile</button>
                  <Link to="/bookingform"><button>Book Now</button></Link>
                </div>
              </ArtistCard>
            ))}
            </div>
<div>
        {topArtists.length > 2 && (
          <button onClick={() => setShowAllArtists(!showAllArtists)}>
            {showAllArtists ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
</div>
      {artistId && <ArtistDetails artistId={artistId} />}
      {/* Use the new component with artistId prop */}
    </div>
  );
};

export default TopArtists;
