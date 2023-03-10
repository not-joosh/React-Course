import { useState } from "react"
import { Person } from './Person.js'
/*
    importing people from folder
*/
import benImg from "../nsfw/ben1.png"
import janlukeImg from "../nsfw/janluke.jpg"
import moeImg from "../nsfw/moe.jpg"
import rhettImg from "../nsfw/rhett.jpg"
import vernImg from "../nsfw/vernon.jpg"
/*
    This will conditional render the user authentication for
    Tabbage
*/
const theBoys = [
    {name: "Josh Ratificar", source: "benImg"},
    {name: "Ben Cadungog", source: benImg},
    {name: "Mohan Francis", source: moeImg},
    {name: "Janluke Ceballos", source: janlukeImg},
    {name: "Rhett Surban", source: rhettImg},
    {name: "Holchi ALin", source: ""},
    {name: "Vernon Velayo",source: vernImg}
]
export const MainContent = () => {
    const [color, setColor] = useState("")
    const [text, setText] = useState("")
    
    return (
        <div>
            <h1>Appreciation Page</h1><br/>
            {theBoys.map((boy, key) =>  {
                return (
                    <Person key = {key} name = {boy.name} content = {boy.source}/>
                )
            })}
        </div>
    )
}
