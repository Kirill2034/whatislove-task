import './Products.modules.css';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {productsStore} from '../../store/ProductsStore';
import {observer} from 'mobx-react-lite';
import {Modal} from '../../components/Modal'
import { Pagination } from '../../components/Pagination';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(6);

    const onSave = (productData) => {
       
        productsStore.saveProduct(productData);
    }

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProduct = productsStore.products.slice(firstProductIndex, lastProductIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="container Products">
            <div className="d-flex justify-content-center mt-5 mb-5">
            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Добавить новый продукт
            </button>
            <Modal 
                modalId="staticBackdrop"
                onSave={onSave}
                />
            </div>
            <div className="row">
                {currentProduct.map(product => (
                    <div key={product.id} className="col-4 mb-4">
                    <NavLink to={`/products/${product.id}`}>
                    
                        <div className="card">
                            <div className="text-center"><img src={product.image} alt="" /></div>
                            <div className="card-body text-center">
                                {product.name}
                            </div>
                        </div>
                    
                    </NavLink>
                    </div>
                ))}
            </div>
            <Pagination 
                    productsPerPage={productsPerPage}
                    totalProducts={productsStore.products.length}
                    paginate={paginate}
            />
        </div>
    )
}

export default observer(Products);