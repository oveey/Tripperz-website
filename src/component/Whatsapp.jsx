import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../styles/whatsapp.css";


const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2349035093635" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp__icon"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppButton;
