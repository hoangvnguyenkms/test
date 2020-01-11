import React, { useState } from 'react';
import './pagination.scss';

export const Pagination = props => {
    const { countOrder } = props;
    const visiblePages = [1,2,3,12];
    const [ idActive, setIdActive ] = useState(visiblePages[0]);
    const activeItem = (id) => {
        setIdActive(id)
    }
    const renderButtonPage = (page) => (
        <button key={page} 
            className={idActive === page ? 'table-page-button active' : 'table-page-button' }
            onClick={() => activeItem(page)}
            >
            {isNaN(page) ? page : ('0' + page).slice(-2)}
        </button>
    )
    return (
        <div className='footer-table-wrapper'>
            <div className='count-order'>
                You have: {countOrder} order
            </div>
            <div className='pagination'>
                {renderButtonPage('First')}
                {visiblePages.map((page, index, array) => {                
                    if(array[index - 1] + 1 < page){
                        return (
                            <>
                                {' ... '}
                                {renderButtonPage(page)}
                            </>
                        );
                    };
                    return renderButtonPage(page);
                })}
                {renderButtonPage('Last')}
            </div>
        </div>
    )
}