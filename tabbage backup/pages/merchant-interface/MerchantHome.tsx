import { useState, useEffect } from 'react';
import { auth } from '../../components/firebase/config/firebase';
export const MerchantHome = () => {
    const [text, setText] = useState("");
    const testFunction = () => {
        console.log(auth.currentUser?.email);
        console.log(auth.currentUser?.uid);
    }
    useEffect(() => {
        testFunction();
    }, []);
    return (
        <div>
            <h1 style={{color: "red", fontFamily: "cursive"}}>You are at the merchant home...</h1>
            <input placeholder = 'You are at the Merchant Home...' onChange = {(event) => 
                setText(event.target.value)}/>
            <input onChange={testFunction}></input>
            <div style = {{color: "yellow", fontFamily: "cursive"}}>{text && text}</div>
        </div>
    )
}