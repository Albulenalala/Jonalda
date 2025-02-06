import React from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../Assets/front.JPG";
import img2 from "../Assets/back.jpg";
import { saveAs } from "file-saver";

// Shtimi i një container për cover image
const CoverContainer = styled.div`
  background-image: url(${require("../Assets/About.jpg")});
  background-size: cover;
  background-position: center;
  height: 450px; /* Lartësia e cover-it */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); /* Efekti i hijes për tekst */
  font-family: "Quicksand", serif;
  margin-bottom: 50px; /* Hapësira nën cover */
  background-attachment: fixed; /* Efekti i ngurtësimit të cover-it */
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1.8px;
  margin: 0;
  text-transform: uppercase; /* Bën tekstin të gjitha shkronjat e mëdha */
  font-family: "Roboto", sans-serif;
  border-bottom: 4px solid #fff; /* Shtimi i një linje poshtë titullit */
  padding-bottom: 10px;
`;
const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  color: #333;
  margin-top: 30px;
  font-family: "Lora", serif;
  font-style: italic;
  padding: 0 20px;
  text-align: center;
  letter-spacing: 1px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px; /* Hapësirë mes imazheve */
`;
const ImageItem = styled.div`
  flex: 1;
  max-width: 48%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out; /* Animacion për efektin e hover */
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.05); /* Zmadhohet imazhi në hover */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover; /* Ruaj pamjen më të mirë të imazheve */
  }
`;
// Funksioni për të shkarkuar PDF-në
const handleDownload = () => {
  saveAs("/referencat.pdf", "referencat.pdf");
};

const Enciklopedia = () => {
  return (
    <div>
      <CoverContainer>
        <Container>
          <Title>Enciklopedia Beratit</Title>
        </Container>
      </CoverContainer>

      <Container>
        <Description>
          Berat Enciklopedi
          <br />
          Është Fjalor Enciklopedik për Prefekturën e Beratit; (Berat, Skrapar
          dhe Kuçovë). Përfshin ngjarje historike dhe të dhëna statistikore, që
          nga lashtësia e deri në vitin 2005, për çdo fshat, komunë e bashki;
          për bujqësinë, industrinë, medien, letërsinë, gjeografinë, turizmin,
          arsimin, kulturën, shëndetësinë, biznesin, për figura të shquara etj.
          Nëse dikush kërkon informacion sa më të gjerë për Prefekturën e
          Beratit mund ta gjej në këtë botim. Botimi, me autor Zylyftar Plaku,
          është udhëhequr, është prezantuar (promovuar) dhe është vlerësuar nga
          Akademia e Shkencave. Është e rëndësishme, për autorin, që lexuesi të
          bëjë sugjerime pas leximit, sepse puna për ribotimin e veprës është në
          vijimësi. Libri ka 900 faqe dhe mbi 3000 zëra dhe çmim kopertine 3000
          lekë.
        </Description>
        {/* Seksioni i Imazheve */}
        <ImageContainer>
          <ImageItem>
            <img src={img1} alt="Pamje e Beratit" />
          </ImageItem>
          <ImageItem>
            <img src={img2} alt="Kalaja e Beratit" />
          </ImageItem>
        </ImageContainer>
        {/* Butoni për shkarkimin e PDF */}
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <Button variant="primary" onClick={handleDownload}>
            Shkarko Referencat (PDF)
          </Button> 
          
          
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "30px",
            
          }}
        >
        <Button variant="primary" a href="https://sq.m.wikipedia.org/wiki/Berati_Enciklopedi"> 
           Shiko me shume
          </Button>

          </div>
      </Container>
    </div>
  );
};
export default Enciklopedia;
