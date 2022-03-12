import React from 'react';
import {NavLink} from 'react-router-dom';
import {newsStore} from '../../store/NewsStore';
import {Modal} from '../../components/Modal'
import {observer} from 'mobx-react-lite';

const News = () => {
    const onSave = (newsData) => {
       
        newsStore.saveNews(newsData);
    }
    return (
        <div className="container News">
            <div className="d-flex justify-content-center mt-5 mb-5">
            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdropNews">
                Добавить новую новость
            </button>
            <Modal 
                modalId="staticBackdropNews"
                onSave={onSave}
                />
            </div>
            <div className="row">
                {newsStore.news.map(blog => (
                    <div key={blog.id} className="col-4 mb-4">
                    <NavLink to={`/news/${blog.id}`}>
                    
                        <div className="card">
                            <div className="text-center"><img src={blog.image} alt="" /></div>
                            <div className="card-body text-center">
                                {blog.name}
                            </div>
                        </div>
                    
                    </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default observer(News);