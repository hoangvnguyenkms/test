import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './styles/breadcrumbs.scss';

export const Breadcrumbs = props => {
    return (
        <div className='breadcrumbs-wrapper'>
            <div className='breadcrumbs container-margin-left'>
                <ArrowBackIosIcon style={{ fontSize: 14 }}/>
                <span> {'back'} </span>
            </div>
        </div>
    )
}