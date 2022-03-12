import { makeAutoObservable} from 'mobx';

class NewsStore {

    news = [
        {id: '1', name: 'news 1', image: '', detail: ''}
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addNews(newsData) {
        const newNews = {
            id: new Date().getMilliseconds().toString(),
            ...newsData
        }
        this.news.push(newNews);
    }

    updateNews(newsData) {
        this.news = this.news.map(news => news.id === newsData.id ? newsData : news)
    }

    saveNews(newsData) {
        if (newsData.id) {
            this.updateNews(newsData);
        } else {
            this.addNews(newsData)
        }
    }

    deleteNewsById(newsId) {
        const idDelitingNews = this.news.findIndex(news => news.id === newsId);
        this.news.splice(idDelitingNews, 1);
    }

    getNews() {
        return this.news;
    }

    getNewsById(newsId) {
        return this.news.find(news => news.id === newsId);
    }
}

const newsStore = new NewsStore();
export {newsStore}