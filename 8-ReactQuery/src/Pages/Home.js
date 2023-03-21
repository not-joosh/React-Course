import { useContext } from "react"
import { AppContext } from "../Components/MainContent.js"
import { useQuery } from "@tanstack/react-query"
export const Home = () => {
    const {data: catData, isLoading, isError, refetch} = useQuery(["cat"], () => {
        return fetch("https://catfact.ninja/fact")
        .then((res) => res.json()
        .then((data) => data.fact))
    }) // Takes two arguments, id and fuunction to fetch data
    const {userName} =  useContext(AppContext)
    if(isError) {
        return <h1>Sorry there was an error. . .</h1>
    }
    if(isLoading) {
        return <h1>Loading. . . </h1>
    }
    return (
        <div>
            <h1> Testing HomePage </h1>
            <div>{userName}</div>
            <div>Cat Fact: {catData?.fact} </div>
            <button onClick = {refetch}>Update Data</button>
        </div>
    )
}