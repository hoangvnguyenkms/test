import React from 'react';
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import './styles/footer.scss';

export const Footer = props => {
    return (        
        <Grid container spacing={0}>
            <footer className='footer black-background'>
                <div className='contact'>
                    <span className='contact-item'>
                        <LocationOnIcon />
                        &nbsp;384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh &nbsp;
                    </span>
                    <span className='contact-item'>
                        |&nbsp;
                        <PhoneIcon />
                        &nbsp;028 3826 8160
                    </span>
                    <span className='contact-item'>
                        |&nbsp;
                        <MailOutlineIcon />
                        &nbsp;phuong@fossil.com
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