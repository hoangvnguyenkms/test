import React from 'react';
import './user-avatar.scss';

export const UserAvatar = props => {
    const { username, srcImg } = props;
    return (
        <div className='profile'>
            <img src={srcImg} width='100%' height='auto' className='avatar' alt='avatar'/>
            <span className='username'>
                { username }
            </span>
        </div>
    )
}
