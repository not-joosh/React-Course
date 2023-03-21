import { useContext } from "react"
import { AppContext } from "../Components/MainContent.js"
export const Home = () => {
    const {userName} =  useContext(AppContext)
    return (
        <div>
            <h1> Testing HomePage </h1>
            <div>{userName}</div>
        </div>
    )
}