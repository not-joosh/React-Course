import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
/*
    Importing Pages
*/
import { HomePage } from '../Pages/Home.js'
import { MenuPage } from '../Pages/Menu.js'
import { ContactPage } from '../Pages/Contact.js'
import { ErrorPage } from '../Pages/Error.js'
/*
    React Router Dom Lesson
    Terminal Command to add to project:
        npm install react-router-dom
*/
export const MainContent = () => {
    return (
        <div>
            <Router>
                <div>
                    NAVBAR
                    <Link to ="/">Home</Link>
                    <Link to ="/menu">Menu</Link>
                    <Link to ="/contact">Contact</Link>
                </div>
                <Routes>
                    <Route path = "/" element = {<HomePage />}/>
                    <Route path = "/menu" element = {<MenuPage />}/>
                    <Route path = "/contact" element = {<ContactPage />}/>
                    <Route path = "*" element = {<ErrorPage />}/>
                </Routes>
            </Router>
        </div>
    )
}

/*
export const MainContent = () => {
    const [excuse, setExcuse] = useState("")
    const fetchExcuse = (excuse) => {
        fetch((`https://excuser.herokuapp.com/v1/excuse/${excuse}`)
        .then((res) => res.json()
        .then((data) => {
            console.log(data)
        })))
    }
    return (
        <div>
            <h1>Generate an Excuse</h1>
            <button onClick = {() => fetchExcuse("party")}>Party</button>
            <button onClick = {() => fetchExcuse("family")}>Family</button>
            <button onClick = {() => fetchExcuse("office")}>Office</button>
            <hr></hr>
            <h1>{excuse && excuse}</h1>
        </div>
    )
}
*/