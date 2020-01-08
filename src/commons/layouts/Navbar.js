import React from 'react';
import './navbar.scss';

export const Navbar = props => {
    const { navbarList = [] } = props;
    return (
        <div class='navbar'>
            <ul class='list-navbar'>
            {navbarList.map( navbar => (
                <li key={navbar.id}>
                    {navbar.name}
                </li>
            ))}
            </ul>
        </div>
    )
}