import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Created By{' '}
        <a href="#" className="footer-link">
          Ganesha Moorthy
        </a>{' '}
        | <span className="far fa-copyright"></span> 2024 All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
