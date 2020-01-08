import React from 'react';
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './footer.scss';

export const Footer = props => {
    return (        
        <Grid xs={12}>
            <footer className='footer'>
                <div className=''>
                    <span className=''>
                        &copy; Alfred Kärcher SE & Co. KG
                    </span>
                </div>
            </footer>
        </Grid>        
    )
}