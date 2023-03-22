import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Login } from '../pages/Login';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../pages/store';
/*
    REDUX TOOL KIT TUTORIAL IN TYPESCRIPT
    npm install @reduxjs/toolkit react-redux
*/
export const MainContent = () => {
    return (
        <div className = "main-content">
            <Provider store = {store}>
                <Router>
                    <Link to = "/">Home</Link>
                    <Link to = "/contact">Contact</Link>
                    <Link to = "/login">Login</Link>
                    <Routes>
                        <Route path = "/" element = {<Home/>}/>
                        <Route path = "/contact" element = {<Contact/>}/>
                        <Route path = "/login" element = {<Login/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}