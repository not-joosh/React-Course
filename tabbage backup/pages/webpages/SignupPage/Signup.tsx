import ReturnButton from '../../../assets/icons/Return_Button.png';
import './SignupStyle.css';
import { SignupDecorations as Decorations } from './SignupDecorations';

import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components/Modal';

import { auth, db } from '../../../components/firebase/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { doc, getDocs, collection, setDoc, addDoc, query, where } from 'firebase/firestore';

interface UserInfo {
    fullName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    accountType: string;
}

export const Signup = () => {
    const navigate = useNavigate();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const schema = yup.object().shape({
        fullName: yup.string().required("Full name field required..."),
        userName: yup.string().min(3, "Username must be at least 3 characters...").max(10, "Username can contain a maximum of 10 characters...").notOneOf([""], "Username field required...")
            .matches(
                /^[a-zA-Z0-9_.-]*$/,
                `Username can only 
                contain letters, numbers, 
                underscores, periods, and dashes...`
            ).required(),
        email: yup.string().email("Email just be a valid email...").required("Email field required..."),
        password: yup.string().min(5, "Password must contain at least 5 characters...").required("Password field required..."),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match...")
            .required("Please confirm your password..."),
        accountType: yup.string().required("Account type required..."),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<UserInfo>({
        resolver: yupResolver(schema),
    });
    
    useEffect(() => {
        let errorMessage = "";
        if (errors.fullName) {
            errorMessage += `<div>${errors.fullName.message}</div>`;
        }
        if (errors.userName) {
            errorMessage += `<div>${errors.userName.message}</div>`;
        }
        if (errors.email) {
            errorMessage += `<div>${errors.email.message}</div>`;
        }
        if (errors.password) {
            errorMessage += `<div>${errors.password.message}</div>`;
        }
        if (errors.confirmPassword) {
            errorMessage += `<div>${errors.confirmPassword.message}</div>`;
        }
        if (errors.accountType) {
            errorMessage += `<div>${errors.accountType.message}</div>`;
        }
        setErrorMessage(errorMessage);
        setIsErrorModalOpen(!!errorMessage);
    }, [errors]);

    const userAssetsRef = collection(db, "userAssets");
    const doSignUp = async (inputData: UserInfo) => {
        try {
            // Check if the email is already in use
            const signInMethods = await fetchSignInMethodsForEmail(auth, inputData.email);
            if (signInMethods.length > 0) {
                throw new Error('Email address is already in use.');
            }
            // Check if the username is already taken
            const querySnapshot = await getDocs(query(userAssetsRef, where("username", "==", inputData.userName)));
            if (!querySnapshot.empty) {
                throw new Error('Username is already taken.');
            }
            // Create a new user account and authenticate the user...
            await createUserWithEmailAndPassword(auth, inputData.email, inputData.password);
            // Signing into the newly created account...
            await signInWithEmailAndPassword(auth, inputData.email, inputData.password);
            // Save user details to the userAssets collection , create
            const newAccountDoc = doc(userAssetsRef, auth.currentUser?.uid);
            await setDoc(newAccountDoc, {
                username: inputData.userName,
                email: inputData.email,
                password: inputData.password,
                accountType: inputData.accountType,
            });
            // Redirect the user to their respective homepage based on their account type.
            switch(inputData.accountType) {
                case 'driver':
                    navigate('/Driver-Main-Page');
                    break;
                case 'merchant':
                    navigate('/Merchant-Main-Page');
                    break;
                case 'customer':
                    navigate('/User-Main-Page');
                    break;
            }
        } catch(err: unknown) {
            if(err instanceof Error) {
                console.error(err);
                setErrorMessage(err.message);
                setIsErrorModalOpen(true);
            }
        }
    };
    return (
        <div className = "signup-wrapper">
            {isErrorModalOpen && (
                <Modal closeModal={() => setIsErrorModalOpen(false)} errorMessage={errorMessage}> </Modal>
            )}
            <div className = "signup-form-box">
                <form className = "signup-form" onSubmit= {handleSubmit(doSignUp)}> 
                    <div className = "signup-input-group">
                        <input className = "signup-name-field" type = "text" placeholder="Full Name..." {...register("fullName")}/>
                        <input className = "signup-username-field" type="text" placeholder="Username..." {...register("userName")}/> 
                        <input className  = "signup-email-field" type= "email" placeholder = "Email..." {...register("email")}/>
                        <input className  = "signup-password-field" type= "password" placeholder = "Password..." {...register("password")}/>
                        <input className  = "signup-confirm-field" type= "password" placeholder = "Confirm Password..." {...register("confirmPassword")}/>
                    </div>
                    <div className  = "signup-options-group">
                        <input className  = "signup-delivery" type="radio" value="driver" {...register("accountType")} />
                        <label className  = "signup-deliverytext" >Tabbage Delivery</label><br/>
                        <input className  = "signup-business" type="radio" value="merchant" {...register("accountType")}/>
                        <label className  = "signup-businesstext" >Business/Merchant</label><br/>
                        <input className  = "signup-personal" type="radio" value="customer" {...register("accountType")}/>
                        <label className  = "signup-personaltext" >Personal Use</label><br/> 
                    </div>
                    <input className  = "signup-create-btn" type = "submit" value = "Create Account"/>
                </form>
            </div>
            <img src = { ReturnButton } className ="signup-Return-btn" onClick={() => navigate("/Login")} alt = "logo"/>
            <Decorations />
        </div>
    )
} 