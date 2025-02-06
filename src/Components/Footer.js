import React from 'react';
import styled from 'styled-components';

// Stili për footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const FooterLink = styled.a`
  color: #00BFFF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #00BFFF;
  }
`;

const Location = styled.div`
  margin-top: 15px;
  font-size: 1rem;
`;

const MapContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 300px;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com/p/Jonalda-100070240956630/?locale=sq_AL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </SocialIcon>
      </SocialIcons>
      
  

      <Location>
        <i className="fas fa-map-marker-alt">
          <FooterLink href="https://maps.app.goo.gl/8Av5zpGoC2fxg8xY8" target="_blank" rel="noopener noreferrer">
            Njesia Bashkiake Nr. 14, Rr. "Sabri Preveza", Kashar, K0 B1, Tiranë 1050, Shqipëri
          </FooterLink>
        </i>
      </Location>

      {/* Embedded Google Map */}
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12651.52658592255!2d19.7963369!3d41.3330627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135039be289d05b1%3A0x8cc3cc235cd2f0f1!2sNjesia%20Bashkiake%20Nr.%2014!5e0!3m2!1sen!2sus!4v1615274694230!5m2!1sen!2sus"
          title="Map Location"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Shtëpia Botuese Jonalda. Të gjitha të drejtat e rezervuara.{' '}
        <FooterLink href="https://absolutsystem.com/">Absolut Technology System</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
