import React from 'react';
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Navbar } from './Navbar';
import './header.scss';

export const Header = props => {
    const navbarList = [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'Order'
        },
        {
            id: 3,
            name: 'Warehouse'
        },
        {
            id: 4,
            name: 'Customer'
        },
        {
            id: 5,
            name: 'System'
        },
        {
            id: 6,
            name: 'Notification'
        },
        
    ];
    return (        
        <Grid container spacing={0}>
            <header className='header dark-background'>
                <Grid item xs={12}>
                    <span>
                        logo
                    </span>
                </Grid>
                <Grid item xs={12}>
                    <div className='navbar-user'>
                        <Navbar 
                            navbarList={navbarList}
                        />
                        <span>
                            <LocationOnIcon color="secondary" />
                        </span>
                    </div>
                </Grid>
            </header>
        </Grid>        
    )
}