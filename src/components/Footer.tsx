import React from 'react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <>
            <footer className={`py-3 cl-footer bottom container-fluid ${className}`}>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 flex-column flex-sm-row">
        <li className="nav-item mx-3">
            <a className="nav-link menu" href="/about">Про сайт</a>
        </li>
        <li className="nav-item mx-3">
            <a className="nav-link menu" href="/gallery">Галерея картинок</a>
        </li>
        <li className="nav-item mx-3">
            <a className="nav-link menu" href="/news">Новини</a>
        </li>
        <li className="nav-item mx-3">
            <a className="nav-link menu" href="/contacts">Контакти</a>
        </li>
    </ul>
    <div className="text-center justify-content-center">
        <a className="nav-link menu" href="">&copy; 2024 ЮРИДИЧНИЙ ВІДДІЛ НУ «ПП ІМ. Ю. КОНДРАТЮКА»</a>
    </div>
</footer>

        </>
    );
};

export default Footer;