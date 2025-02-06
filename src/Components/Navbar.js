import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Search icon
import { Link } from 'react-router-dom';

const NavbarContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  opacity: 90%;
  color: black;
  border-bottom: 1px solid #ddd;
  z-index: 10;
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  height: 50px;
   h1 {
    font-size: 1rem; /* Madhësi shumë e vogël për titullin */
    font-weight: 500; /* Opsionale, mund të ulni trashësinë e fontit për estetikë */
    margin: 0; /* Hiqni hapësirën e jashtme për ta bërë më kompakt */
    color: #333; /* Ngjyra opsionale */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 0.8rem; /* Edhe më e vogël për ekranet mobile */
    }
  }
`;




const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 15px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

const SearchIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

const NavbarLinks = styled.nav`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px 0;
  font-family: "Quicksand", serif;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavbarItem = styled.li`
  margin: 0 15px;
  font-size: 16px;

  a {
    color: white;
    text-decoration: none;
    padding: 5px 20px;
    display: inline-block;
    border: 1px solid white; /* Kufij të bardhë */
    border-radius: 8px; /* Këndet e rrumbullakosura */
    transition: all 0.3s ease-in-out; /* Kalim i butë për efektet */
  }

  a:hover {
    background-color: white; /* Sfond i bardhë në hover */
    color: black; /* Teksti bëhet i zi */
    border-color: black; /* Kufijtë bëhen të zinj në hover */
  }

  a:active {
    transform: translateY(2px); /* Efekt shtypjeje kur klikohet */
  }
`;

const MobileNavbar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    right: 0; /* Sigurohuni që menuja të jetë e vendosur në të djathtë të ekranit */
    width: 100vw; /* 100% e gjerësisë së ekranit */
    top: 50px;
    background-color: black; /* Background i plotë i zi */
    padding: 20px;
    z-index: 1000;
    transform: translateX(100%); /* Fillimisht, menuja është jashtë ekranit në të djathtë */
    transition: transform 0.3s ease-in-out; /* Kalim i butë kur hapet */

    /* Kur menuja është e hapur, transformohet në pozicion të dukshëm */
    &.open {
      transform: translateX(0);
    }
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;
  width: 30px;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s ease-in-out;  /* Smooth transition for the menu icon */
    display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  height: 2px;  /* Slightly thinner line for cleaner look */
  width: 100%;
  background-color: #333;
  border-radius: 5px;  /* Rounded edges for a sleeker look */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Smooth animations */

  &:hover {
    background-color: #444;  /* Lighter color on hover for emphasis */
  }
`;

const MobileNavbarLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const MobileNavbarItem = styled.li`
  margin: 15px 0;
  font-size: 18px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarContainer>
      <NavbarTop>
        <h1>Shtëpia Botuese JONALDA</h1>
        <SearchForm>
          <SearchInput type="text" placeholder="Kerko Këtu" />
          <SearchIcon><FaSearch /></SearchIcon>
        </SearchForm>
        <HamburgerMenu onClick={toggleMenu}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerMenu>
      </NavbarTop>

      <NavbarLinks>
        <NavbarList>
          <NavbarItem><Link to="/">Kreu</Link></NavbarItem>
          <NavbarItem><Link to="/about">Rreth nesh</Link></NavbarItem>
          <NavbarItem><Link to="/books">Kategori</Link></NavbarItem>
          <NavbarItem><Link to="/enciklopedia">Enciklopedia Beratit</Link></NavbarItem>
          <NavbarItem><Link to="/contact">Kontakt</Link></NavbarItem>
        </NavbarList>
      </NavbarLinks>

      <MobileNavbar className={isMenuOpen ? 'open' : ''}>
        <MobileNavbarLinks>
          <MobileNavbarItem><Link to="/" onClick={toggleMenu}>Kreu</Link></MobileNavbarItem>
          <MobileNavbarItem><Link to="/about" onClick={toggleMenu}>Rreth nesh</Link></MobileNavbarItem>
          <MobileNavbarItem><Link to="/books" onClick={toggleMenu}>Kategori</Link></MobileNavbarItem>
          <MobileNavbarItem><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></MobileNavbarItem>
          <MobileNavbarItem><Link to="/enciklopedia" onClick={toggleMenu}>Enciklopedia Beratit</Link></MobileNavbarItem>
        </MobileNavbarLinks>
      </MobileNavbar>
    </NavbarContainer>
  );
};

export default Navbar;