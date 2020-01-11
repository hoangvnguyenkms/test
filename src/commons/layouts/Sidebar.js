import React, { useState } from 'react';
import Dehaze from '@material-ui/icons/Dehaze';
import './styles/sidebar.scss';

export const SideBar = props => {
    const sidebarList = [
        {
            id: 1,
            name: 'Confirm',
            link: '#',
        },
        {
            id: 2,
            name: 'Process',
            link: '#',
        },
        {
            id: 3,
            name: 'Waiting',
            link: '#',
        },
        {
            id: 4,
            name: 'Payment',
            link: '#',
        },
        {
            id: 5,
            name: 'Success',
            link: '#',
        },        
    ];
    
    const [ idActive, setIdActive ] = useState( sidebarList[0] ? sidebarList[0].id : null );
    const activeItem = (id) => {
        setIdActive(id)
    }
    return (
        <div className={'sidebar'}>
            <div className={'sidebar-list'}>
                {sidebarList.map( navbar => (
                    <a href={navbar.link} 
                        key={navbar.id}
                        className={ idActive === navbar.id ? 'text-bold active' : 'text-bold'}
                        onClick={() => activeItem(navbar.id)}>
                        {navbar.name && navbar.name.toUpperCase()}
                    </a>
                ))}  
            </div>                      
        </div>
    )
}