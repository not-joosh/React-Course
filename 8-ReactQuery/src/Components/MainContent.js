import {useEffect, useState, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
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
    React Query Tutorial
    npm install @tanstack/react-query
*/
export const AppContext = createContext();
export const MainContent = () => {
    const client = new QueryClient({defaultOptions:  {
        queries: {
            refetchOnWindowFocus: false, // No more refetching...
        },
    }})
    const [userName, setUserName] = useState("")
    return (
        <div>
            <QueryClientProvider client = {client}>
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
            </QueryClientProvider>
        </div>
    )
}