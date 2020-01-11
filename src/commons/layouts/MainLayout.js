import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { SideBar } from './Sidebar';
import './styles/main-layout.scss';

export const MainLayout = props => {    
    const { children } = props;
    return (
        <div className='wrapper-container'>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={4} xs={12} className='gray-background'>
                    <div className='margin-top30'>
                        <SideBar />
                    </div>
                </Grid>
                <Grid item md={8} xs={12}>
                    <div className='margin-top30 margin-left20 main-content'>
                        {children}
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}