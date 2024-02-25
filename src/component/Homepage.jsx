import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'grrom11.jpg',
    'homepage1.jpg',
    'homepage2.jpg',
    'homepage3.jpg',
    'homepage4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ImageContainer style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <Content>
          <Heading>For every Bride, every Groom, every Beauty Parlor Real results..</Heading>
          <Paragraph>We’re on a mission to provide world-class makeup for anyone, anywhere.</Paragraph>
          <Heading>Join As a</Heading>
          <Buttons>
            <Button>Artist</Button>
            <Button>Client</Button>
            <Button>Beauty Parlor</Button>
          </Buttons>
        </Content>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius:70px;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
 
`;

const Heading = styled.h1`
  font-size: 2.9rem;
  font-weight: 390;
  margin-bottom: 0.5rem;
  
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 390;
  margin-bottom: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;

  justify-content: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: green; /* Customized color */
  color: white;
  border: none;
  width:14vw;
  height:6vh;
  font-weight: 340;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
`;

export default HomePage;
