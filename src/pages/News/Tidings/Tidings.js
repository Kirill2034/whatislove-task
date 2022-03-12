import './Tidings.modules.css';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {newsStore} from '../../../store/NewsStore';
import { useNavigate, Navigate } from "react-router-dom";
import {observer} from 'mobx-react-lite';
import {Modal} from '../../../components/Modal';


const Tidings = () => {
    const params = useParams();
    const news = newsStore.getNewsById(params.newsId); 
    const navigate = useNavigate();
    const deleteNews = () => {
        newsStore.deleteNewsById(params.newsId);
        navigate('/news')
    } 

    const goBack = () => {
        navigate('/news');
    }

    const onSave = (newsData) => {
       
        newsStore.saveNews({id: params.newsId, ...newsData});
    }
    if(!news) {
        return <Navigate to="/news"/>
    }
    return (
        <div className="News container text-center mt-5">
        <div class="d-flex justify-content-around align-items-center mb-5">
        <button className="btn btn-outline-dark" onClick={goBack}>&larr; Вернуться назад</button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#static" className="btn btn-outline-info">Редактировать новость</button>
            <Modal  
                    modalId="static"
                    onSave={onSave}
                    product={news}
                    />
            <button className="btn btn-danger" onClick={deleteNews}>Удалить новость</button>
        </div>
        <div className="text-center"><img src={news.image} alt=""/></div>
        <h1>{news.name}</h1>
        <h4 className="text-secondary">{news.detail}</h4>
    </div>
    )
}

export default observer(Tidings);