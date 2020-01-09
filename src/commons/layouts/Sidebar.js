import React, { useState } from 'react';
import Dehaze from '@material-ui/icons/Dehaze';
import './sidebar.scss';

export const SideBar = props => {
    const sidebarList = [
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
    
    return (
        <div className={'sidebar'}>
            {sidebarList.map( navbar => (
                <a href={navbar.link} key={navbar.id}>
                    {navbar.name}
                </a>
            ))}            
        </div>
    )
}