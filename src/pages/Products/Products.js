import './Products.modules.css';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {productsStore} from '../../store/ProductsStore';
import {observer} from 'mobx-react-lite';
import {Modal} from '../../components/Modal';

const Products = () => {
    const [inputValueProductName, setInputValueProductName] = useState('');
    const [inputValueProductImage, setInputValueProductImage] = useState('');
    const [inputValueProductDetail, setInputValueProductDetail] = useState('');

    const handleChangeProductName = event => {
        setInputValueProductName(event.target.value);
    }
    const handleChangeProductImage = event => {
        setInputValueProductImage(event.target.value);
    }
    const handleChangeProductDetail = event => {
        setInputValueProductDetail(event.target.value);
    }

    const onAddProduct = () => {
       
        productsStore.addProduct({
            id: new Date().getMilliseconds().toString(), 
            name: inputValueProductName,
            image: inputValueProductImage,
            detail: inputValueProductDetail
        });
        setInputValueProductName('');
    }

    return (
        <div className="container Products">
            <div className="d-flex justify-content-center mt-5 mb-5">
            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Добавить новый продукт
            </button>
            <Modal 
                modalId="staticBackdrop"
                onChangeProductName={handleChangeProductName}
                valueProductName={inputValueProductName}
                onChangeProductImage={handleChangeProductImage}
                valueProductImage={inputValueProductImage}
                onChangeProductDetail={handleChangeProductDetail}
                valueProductDetail={inputValueProductDetail}
                onAddProduct={onAddProduct}
                disabled={!inputValueProductName}
                />
            </div>
            <div className="row">
                {productsStore.products.map(product => (
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
        </div>
    )
}

export default observer(Products);