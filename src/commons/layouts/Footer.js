import React from 'react';
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './styles/footer.scss';

export const Footer = props => {
    return (        
        <Grid container spacing={0}>
            <footer className='footer black-background'>
                <div className='contact'>
                    <span className=''>
                        &copy; Alfred Kärcher SE & Co. KG
                    </span>
                </div>
                <div className='name-company'>
                    <span>
                        &copy; Công Ty TNHH Fossil Việt Nam
                    </span>
                </div>
            </footer>
        </Grid>        
    )
}