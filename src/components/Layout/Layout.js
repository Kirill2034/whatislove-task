import {Link, Outlet} from 'react-router-dom';
import './Layout.modules.css';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/products">Продукты</Link>
            <Link to="/blog">Новости</Link>
            <Link to="/about">О нас</Link>
        </header>

        <Outlet />
        
        </>
    )
}

export {Layout}