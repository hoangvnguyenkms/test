import React from 'react';
import './footer-table.scss';

export const Pagination = props => {
    const visiblePages = [1,2,3,12];
    return (
        <div className='footer-table'>
            <div className='count-order'>
                You have
            </div>
            <div className='pagination'>
            {visiblePages.map((page, index, array) => {                
                if(array[index - 1] + 1 < page){
                    return (
                        <>
                            {' ... '}
                            <button key={page} className='table-page-button'>
                                {page}
                            </button>
                        </>
                    );
                };
                return (
                    <button key={page} className='table-page-button'>
                        {page}
                    </button>
                );
            })}
            </div>
        </div>
    )
}