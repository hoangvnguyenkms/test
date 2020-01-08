import React from 'react';
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Navbar } from './Navbar';
import './header.scss';

export const Header = props => {
    const navbarList = [
        {
            id: 1,
            name: 'One'
        },
        {
            id: 2,
            name: 'Two'
        },
    ];
    return (        
        <Grid xs={12}>
            <header class='header dark-background'>
                <span>
                    logo
                </span>
                <div class='navbar-user'>
                    <Navbar 
                        navbarList={navbarList}
                    />
                    <span>
                        <LocationOnIcon color="secondary" />
                    </span>
                </div>
            </header>
        </Grid>        
    )
}