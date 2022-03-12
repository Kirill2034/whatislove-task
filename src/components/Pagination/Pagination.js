import React, { Component } from 'react';
import './Pagination.modules.css';

const Pagination = ({ productsPerPage, totalProducts, paginate, activeBtn }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                {pageNumbers.map(number => (
                    <button className='mr-5 btn btn-outline-danger' key={number} onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;