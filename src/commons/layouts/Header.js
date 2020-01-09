import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Navbar } from './Navbar';
import './header.scss';

export const Header = props => {

    const navbarList = [
        {
            id: 1,
            name: 'Home',
            link: '#',
        },
        {
            id: 2,
            name: 'Order',
            link: '#',
        },
        {
            id: 3,
            name: 'Warehouse',
            link: '#',
        },
        {
            id: 4,
            name: 'Customer',
            link: '#',
        },
        {
            id: 5,
            name: 'System',
            link: '#',
        },
        {
            id: 6,
            name: 'Notification',
            link: '#',
        },
        
    ];
    const [ navbarDisplay, setNavbarDisplay ] = useState(false);
    const toggleNavbar = () => {
        setNavbarDisplay(!navbarDisplay)
    }
    return (        
        <Grid container spacing={0}>
            <header className={`header ${navbarDisplay? 'show-nav-bar' : ''} dark-background`}>
                <span>
                    logo
                </span>
                <div className='navbar-user'>
                    <Navbar
                        toggleNavbar={toggleNavbar}
                        navbarDisplay={navbarDisplay}
                        navbarList={navbarList}
                    />
                    <div className='profile'>
                        ABC
                    </div>                    
                </div>
            </header>
        </Grid>        
    )
}