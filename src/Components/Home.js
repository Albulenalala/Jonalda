import React from 'react';
import styled from 'styled-components';
// Importoni videon
import LibraVideo from '../Assets/Libra.mp4';
import Slider from './Slider';
import Logo from '../Assets/logo.png'; // Shtoni këtu importimin e logon

// Container që mban përmbajtjen dhe videon
const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-family: "Quicksand", serif;
`;

// Video që shfaqet si sfond
const BackgroundVideo = styled.video`
  width: 100%;
  height: 600px; 
  object-fit: cover; 
  z-index: 0; 
  pointer-events: none; /* Prevent clicking or interaction with the video */

  @media (max-width: 768px) {
    height: 400px;
    pointer-events: none; /* Ensures the video remains non-interactive on mobile */
  }
`;


const Content = styled.div`
  text-align: center;
  background: rgba(216, 216, 216, 0.53); 
  padding: 0px 20px ;
  border-radius: 5px;
  position: absolute;
  top: 35%; /* Vendos logon në mes të videos */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-family: "Quicksand", serif;

  img {
    max-width: 400px; /* Përshtat madhësinë e logos */
    height: auto;
    margin-bottom: 20px; /* Hapësirë ndërmjet logos dhe përshkrimit */
    // box-shadow: 0 1px 10px rgba(252, 252, 252, 0.1);
    border-radius: 1px; /* Opcionale, për një efekt të butë */
  }

  p {
    color: white;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    top: 25%; /* Lëviz përmbajtjen pak më lart në ekranet e vogla */
    padding: 10px 20px;

    img {
      max-width: 150px; /* Përshtat madhësinë e logos për ekranet më të vogla */
    }

    p {
      font-size: 1rem; /* Përshtat madhësinë e tekstit */
    }
  }
`;


// Seksioni që mban Slider-in, poshtë videos
const SliderSection = styled.div`
  margin-top: -6px;
  padding: 20px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 1%, rgba(0, 0, 0, 1) 100%);
  font-family: "Quicksand", serif;

  /* Media query për ekranet më të vogla */
  @media (max-width: 768px) {
    padding: 10px; /* Ul padding për ekranet më të vogla */
  }
`;

const PublicationMessage = styled.div`
  text-align: center;
  color: white;
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 200;
  border-radius: 8px;
  margin: 20px auto; 
  width: 60%; 
  font-family: "Quicksand", serif;

  /* Media query për ekranet më të vogla */
  @media (max-width: 768px) {
    width: 80%; /* Përshtat gjerësinë për ekranet më të vogla */
    font-size: 16px; /* Përshtat madhësinë e fontit */
  }
`;

const Home = () => (
  <HomeContainer>
    {/* Video e sfondit */}
    <BackgroundVideo autoPlay muted loop>
      <source src={LibraVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </BackgroundVideo>

    {/* Përmbajtja mbi videon */}
    <Content>
      {/* <h1>Shtëpia Botuese JONALDA</h1> */}
      <img src={Logo}  alt="Logo e Shtëpisë Botuese Jonalda" />

      
    </Content>
    

    {/* Slider që shfaqet si vazhdim i faqes */}
    <SliderSection>
      <PublicationMessage>
      <p>Ne ofrojmë librat më të mirë për çdo lexues.</p>
        Zbuloni llojet e botimeve tona: për fëmijë, të rinj, shkollore dhe shumë më tepër!
      </PublicationMessage>
      <Slider />
    </SliderSection>
  </HomeContainer>
);

export default Home;
