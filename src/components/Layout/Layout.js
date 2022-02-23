import {Link, Outlet} from 'react-router-dom';
import './Layout.modules.css';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </header>

        <Outlet />
        
        </>
    )
}

export {Layout}