import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Use free-solid-svg-icons

import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
      <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
        <p>Copyright@Sushma</p>
        <div className="footer-icons" style={{display: "flex", color: "white", alignItems: "center" }}>
          <a href="https://www.linkedin.com/in/sushma-deegoju-vt" target="_blank" rel="noopener noreferrer" style={{padding: "5px 10px", color: "white", fontSize: "18px" }}>
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
          <a href="tel:+15409984213">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" style={{padding: "5px 10px", color: "white" }}/>
          </a>
          <a href="mailto:sushmadeegoju16@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" style={{padding: "5 10", color: "white" }}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
