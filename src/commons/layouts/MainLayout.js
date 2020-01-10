import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';
export const MainLayout = props => {    
    const { children } = props;
    return (
        <div className='wrapper-container'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}