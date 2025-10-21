import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({logo}) => {
  return (
    <div>
        <nav>
            <div>
                <img src={logo} alt="Vite" />
            </div>
            <div>
                 <Link to={"/"}>Home</Link>
                 <Link to={"/about"}>About Us</Link>
                 <Link to={'/careers'}>Careers</Link>
                 <Link to={'/gallery'}>Gallery</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;