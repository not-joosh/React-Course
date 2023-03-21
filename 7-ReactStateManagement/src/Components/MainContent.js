import {useEffect, useState, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/*
    Importing Components
*/
import {NavBar} from './NavBar.js'
/*
    Importing Pages
*/
import { Home as HomePage } from '../Pages/Home.js'
import { Profile as ProfilePage } from '../Pages/Profile.js'
import { Contact as ContactPage } from '../Pages/Contact.js'
import { Error as ErrorPage } from '../Pages/Error.js'
/*
    React Router Dom Lesson
    Terminal Command to add to project:
        npm install react-router-dom
*/
/*
    State Management with Prop Drilling (Passing States)
*/
export const AppContext = createContext();
export const MainContent = () => {
    const [userName, setUserName] = useState("")
    return (
        <div>
            <AppContext.Provider value = {{userName, setUserName}}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path = "/" element = {<HomePage/>}/>
                        <Route path = "/profile" element = {<ProfilePage />}/>
                        <Route path = "/contact" element = {<ContactPage />}/>
                        <Route path = "*" element = {<ErrorPage />}/>
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    )
}