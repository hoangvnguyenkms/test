import React, { useState } from 'react';
import Dehaze from '@material-ui/icons/Dehaze';
import './styles/navbar.scss';

export const Navbar = props => {
    const { navbarList = [], navbarDisplay, toggleNavbar } = props;
    const [ idActive, setIdActive ] = useState( navbarList[1] ? navbarList[1].id : null );
    const activeItem = (id) => {
        setIdActive(id)
    }
    return (
        <div>
            <div className={`navbar ${navbarDisplay ? 'show-navbar-mobile' : ''}`}>
                {navbarList.map( navbar => (
                    <a href={navbar.link} 
                        key={navbar.id} 
                        className={ idActive === navbar.id ? 'item active' : 'item'}
                        onClick={() => activeItem(navbar.id)}>
                        {navbar.name && navbar.name.toUpperCase()}
                    </a>
                ))}            
            </div>
            <a href='/#' className='expand-nav' onClick={() => toggleNavbar()}>
                <Dehaze style={{ color: '#FFF' }} />
            </a>
        </div>
    )
}