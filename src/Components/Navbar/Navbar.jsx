import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-250px";
    }

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 120 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <div className="header" id="header">
            <div className="container">
                <nav className={`${sticky ? 'dark-nav' : ''}`}>
                    <h1><span>P</span>ortfolio</h1>
                    <ul ref={menuRef} id='sidemenu' >
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <FontAwesomeIcon icon={faXmark} className='fa-menu' onClick={closeMenu} />
                    </ul>
                    <FontAwesomeIcon icon={faBars} className='fa-menu' onClick={openMenu} />
                </nav>
                <div className="header-text">
                    <p>Front-End Developer</p>
                    <h1>Hi, I'm <span>Kenil</span> Chovatiya</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar