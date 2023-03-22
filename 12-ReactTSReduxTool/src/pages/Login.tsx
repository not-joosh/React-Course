import { useState } from 'react';
import { login, logout } from '../pages/store';
import { useDispatch, useSelector } from 'react-redux';
export const Login = () => {
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username)
    return (
        <div>
            {username? <h1>Welcome {username}!</h1> : <h1>LOGIN PAGE</h1>}
            <input type = 'text' placeholder = "Ex: Josh Ratificar" onChange = {(event) => {
                setNewUsername(event?.target.value)
            }}></input>
            <button onClick={() => {
                dispatch(login({username: newUsername}))
            }}>Submit Login</button>
            <button onClick = {() => dispatch(logout())}>Logout</button>
        </div>
    )
}