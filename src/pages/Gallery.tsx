import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/Gallery.css';
import '../css/Header-Footer.css';
import People1 from '../images/1.jpg';
import People2 from '../images/2.jpg';
import People3 from '../images/3.jpg';

const Gallery = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'src/scripts/Gallery.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <div className="slider" id="slider3">
          <div className="title1" style={{ backgroundImage: `url(${People1})` }}>
            <span>
              <h2>Проведення тренінгу з командної роботи</h2>
            </span>
          </div>
          <div className="title2" style={{ backgroundImage: `url(${People2})` }}>
            <span>
              <h2>Огляд нових законодавчих актів</h2>
            </span>
          </div>
          <div className="title3" style={{ backgroundImage: `url(${People3})` }}>
            <span>
              <h2>Обговорення останніх юридичних новин</h2>
            </span>
          </div>
          <i className="left arrows" style={{ zIndex: 2, position: 'absolute' }}>
            <svg viewBox="0 0 100 100">
              <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
            </svg>
          </i>
          <i className="right arrows" style={{ zIndex: 2, position: 'absolute' }}>
            <svg viewBox="0 0 100 100">
              <path
                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                transform="translate(100, 100) rotate(180)"
              ></path>
            </svg>
          </i>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
