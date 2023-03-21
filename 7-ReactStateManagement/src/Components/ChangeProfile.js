import {useState, useContext} from 'react'
import { AppContext } from './MainContent.js'
export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("")
    const {setUserName} = useContext(AppContext)
    return (
        <div>
            <input placeholder= "Enter username . . ." onChange={(event) => {
                setNewUsername(event.target.value)
            }}></input>
            <button onClick = {() => {
                setUserName(newUsername)
            }}>Change Username</button>
        </div>
    )
}