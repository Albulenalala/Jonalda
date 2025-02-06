import React from 'react';
import './Slider.css';
import Journal from '../Assets/JOURNAL (3).png';
import Journal1 from '../Assets/JOURNAL (4).png';
import Journal2 from '../Assets/JOURNAL (2).png';
import Journal3 from '../Assets/JOURNAL (1).png';
import Journal4 from '../Assets/JOURNAL (5).png';
import Journal5 from '../Assets/JOURNAL (6).png';
import Journal6 from '../Assets/JOURNAL (7).png';
import Journal7 from '../Assets/JOURNAL (8).png';
import A1 from "../Assets/A1.jpg";
import A2 from "../Assets/A2.jpg";
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="slider-container">
      {/* Kolona 1 - Botime për të vegjël */}
      <div className="column">
        <h2>Botime për të vegjël</h2>
        <div className="images">
          <div className="image-item">
            <img src={Journal1} alt="Libri 2" />
            <h3>Libri i 2</h3>
          </div>
          <div className="image-item">
            <img src={Journal} alt="Libri 2" />
            <h3>Libri i 2</h3>
          </div>
        </div>
        <Link to="/books" className="btn">Katalogu i plote</Link> {/* Linku për kategoritë */}

      </div>
      {/* Kolona 2 - Botime për fëmijë */}
      <div className="column">
        <h2>Botime për fëmijë</h2>
        <div className="images">
          <div className="image-item">
            <img src={A1} alt="Libri 3" />
            <h3>Libri i 3</h3>
          </div>
          <div className="image-item">
            <img src={A2} alt="Libri 4" />
            <h3>Libri i 4</h3>
          </div>
        </div>
        <Link to="/books" className="btn">Katalogu i plote</Link> {/* Linku për kategoritë */}
      </div>

      {/* Kolona 3 - Botime për të rinjtë */}
      <div className="column">
        <h2>Botime për të rinjtë</h2>
        <div className="images">
          <div className="image-item">
            <img src={Journal2} alt="Libri 3" />
            <h3>Libri i 3</h3>
          </div>
          <div className="image-item">
            <img src={Journal3} alt="Libri 4" />
            <h3>Libri i 4</h3>
          </div>
        </div>
        <Link to="/books" className="btn">Katalogu i plote</Link> {/* Linku për kategoritë */}
      </div>

      {/* Kolona 4 - Botime shkollore */}
      <div className="column">
        <h2>Botime shkollore</h2>
        <div className="images">
          <div className="image-item">
            <img src={Journal4} alt="Libri 7" />
            <h3>Libri i 7</h3>
          </div>
          <div className="image-item">
            <img src={Journal5} alt="Libri 8" />
            <h3>Libri i 8</h3>
          </div>
        </div>
        <Link to="/books" className="btn">Katalogu i plote</Link> {/* Linku për kategoritë */}
      </div>

      {/* Kolona 5 - Botime për të rritur */}
      <div className="column">
        <h2>Botime për të rritur</h2>
        <div className="images">
          <div className="image-item">
            <img src={Journal6} alt="Libri 9" />
            <h3>Libri i 9</h3>
          </div>
          <div className="image-item">
            <img src={Journal7} alt="Libri 10" />
            <h3>Libri i 10</h3>
          </div>
        </div>
        <Link to="/books" className="btn">Katalogu i plote</Link> {/* Linku për kategoritë */}
      </div>
    </div>
  );
};

export default Slider;
