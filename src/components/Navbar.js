import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [Button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
      <>
        <nav className ="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Matthew Kim  
                </Link> 
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/education" className='nav-links' onClick={closeMobileMenu}>
                        Education
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/technical-skills" className='nav-links' onClick={closeMobileMenu}>
                        Technical Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/experience" className='nav-links' onClick={closeMobileMenu}>
                        Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/hobbies" className='nav-links' onClick={closeMobileMenu}>
                        Hobbies
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
      </>
    );
}

export default Navbar
