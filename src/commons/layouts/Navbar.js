import React, { useState } from 'react';
import Dehaze from '@material-ui/icons/Dehaze';
import './navbar.scss';

export const Navbar = props => {
    const { navbarList = [], navbarDisplay, toggleNavbar } = props;
    
    return (
        <div>
            <div className={`navbar ${navbarDisplay ? 'show-navbar-mobile' : ''}`}>
                {navbarList.map( navbar => (
                    <a href={navbar.link} key={navbar.id}>
                        {navbar.name}
                    </a>
                ))}            
            </div>
            <a href='/#' className='expand-nav' onClick={() => toggleNavbar()}>
                <Dehaze style={{ color: '#FFF' }} />
            </a>
        </div>
    )
}