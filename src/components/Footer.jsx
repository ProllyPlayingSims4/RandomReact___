import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/gallery'}>Gallery</Link>
            <Link to={'/careers'}>Careers</Link>   
        </footer>
    </div>
  )
}

export default Footer;