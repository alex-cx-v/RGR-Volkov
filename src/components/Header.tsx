import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    <header className={className}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary top justify-content-center">
        <div className="container-fluid cl-header justify-content-between"> {/* Зміна тут */}
            <a className="navbar-brand menu" href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={isHovered ? "/whiteLogo.png" : "/Logo.png"} width="100px" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse list justify-content-center" id="navbarTogglerDemo02">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item list">
                        <a className="nav-link menu" aria-current="page" href="/about">Про сайт</a>
                    </li>
                    <li className="nav-item list">
                        <a className="nav-link menu" href="/gallery">Галерея картинок</a>
                    </li>
                    <li className="nav-item list">
                        <a className="nav-link menu" href="/news">Новини</a>
                    </li>
                    <li className="nav-item list">
                        <a className="nav-link menu" href="/contacts">Контакти</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
        </>
    );
};

export default Header;
