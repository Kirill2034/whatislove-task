import React from 'react';
import './Product.modules.css';
import {useParams} from 'react-router-dom';
import {productsStore} from '../../store/ProductsStore';
import { useNavigate, Navigate  } from "react-router-dom";
import {Modal} from '../../components/Modal';
import {observer} from 'mobx-react-lite';


const Product = () => {
    const params = useParams();
    const product = productsStore.getProductById(params.productId); 
    const navigate = useNavigate();
    const deleteProduct = () => {
        productsStore.deleteProductById(params.productId);
        navigate('/products')
    } 

    const goBack = () => {
        navigate('/products');
    }

    const onSave = (productData) => {
       
        productsStore.saveProduct({id: params.productId, ...productData});
    }
    if(!product) {
        return <Navigate to="/products"/>
    }
    return (
        <div className="Product container text-center mt-5">
            <div class="d-flex justify-content-around align-items-center mb-5">
            <button className="btn btn-outline-dark" onClick={goBack}>Вернуться назад</button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#static" className="btn btn-outline-info">Редактировать товар</button>
                <Modal  
                    modalId="static"
                    onSave={onSave}
                    product={product}
                    />
                <button className="btn btn-danger" onClick={deleteProduct}>Удалить товар</button>
            </div>
            <div className="text-center"><img src={product.image} alt=""/></div>
            <h1>{product.name}</h1>
            <h4 className="text-secondary">{product.detail}</h4>
        </div>
    )
}

export default observer(Product);