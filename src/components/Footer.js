import React from 'react';
import {  Container } from 'react-bootstrap';

const Footer = () => {
   return (
      <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-light text-secondary">
         <Container>
            <p className="text-center">
            Made with 💜 by <strong><a href="https://edithmg.netlify.app" target="_blank" 
            rel="noopener noreferrer">Edith</a></strong>.
            </p>
         </Container>
      </footer>
      
    
   )
}

export default Footer;