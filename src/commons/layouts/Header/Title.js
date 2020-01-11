import React from 'react';
import './styles/title.scss';

export const Title = props => {
    const { title, description } = props;
    return (
        <div className='title'>
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    )
}