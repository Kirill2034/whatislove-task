import React from 'react';
import './Product.modules.css';
import {useParams} from 'react-router-dom';
import {productsStore} from '../../store/ProductsStore';
import { useNavigate  } from "react-router-dom";


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

    return (
        <div className="Product container text-center mt-5">
            <div class="d-flex justify-content-around align-items-center mb-5">
            <button className="btn btn-outline-dark" onClick={goBack}>Вернуться назад</button>
                <button className="btn btn-outline-info">Редактировать товар</button>
                <button className="btn btn-danger" onClick={deleteProduct}>Удалить товар</button>
            </div>
            <div className="text-center"><img src={product.image} alt=""/></div>
            <h1>{product.name}</h1>
            <h4 className="text-secondary">{product.detail}</h4>
        </div>
    )
}

export default Product;