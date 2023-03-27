import { useState, useEffect } from 'react';
import { auth } from '../../components/firebase/config/firebase';
export const DriverHome = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log(auth.currentUser?.email);
        console.log(auth.currentUser?.getIdToken);
    }, []);
    return (
        <div>
            <h1 style={{color: "red", fontFamily: "cursive"}}>You are at the merchant home...</h1>
            <input placeholder = 'You are at the Merchant Home...' onChange = {(event) => 
                setText(event.target.value)}/>
            <div style = {{color: "yellow", fontFamily: "cursive"}}>{text && text}</div>
        </div>
    )
}