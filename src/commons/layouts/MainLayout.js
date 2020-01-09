import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SideBar } from './Sidebar';
export const MainLayout = props => {    
    const { children } = props;
    return (
        <div class='wrapper-container'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}