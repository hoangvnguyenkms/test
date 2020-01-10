import React from 'react';
import './user-avatar.scss';

export const UserAvatar = props => {
    const { username } = props;
    return (
        <div className='profile'>
            <span className='avatar'>
                <img src='/logo512.png' width='100%' height='auto' alt='avatar'/>
            </span>
            <span className='username'>
                { username }
            </span>
        </div>
    )
}
