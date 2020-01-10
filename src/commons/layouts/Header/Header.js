import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Navbar } from './Navbar';
import { Title } from './Title';
import { Breadcrumbs } from './Breadcrumbs';
import { UserAvatar } from '../../components/UserAvatar/UserAvatar';
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
        <header>    
            <Grid container spacing={0}>
                <div className={`header ${navbarDisplay? 'show-nav-bar' : ''} dark-background`}>
                    <div className='logo'>
                        <img src='/logo512.png' width='100%' height='auto' alt='logo'/>
                    </div>
                    <div className='navbar-user'>
                        <Navbar
                            toggleNavbar={toggleNavbar}
                            navbarDisplay={navbarDisplay}
                            navbarList={navbarList}
                        />
                        <UserAvatar
                            username='Hoang12'
                        />                 
                    </div>
                </div>            
            </Grid>
            <Grid container spacing={0}>
                <Title 
                    title={'List of order'}
                    description={'Orders information & payment'}
                />
            </Grid>
            <Grid container spacing={0}>
                <Breadcrumbs />
            </Grid> 
        </header>      
    )
}