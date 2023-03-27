import './LoginStyle.css';
import { LoginDecorations as Decorations } from './LoginDecorations';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';

import { auth, db } from '../../../components/firebase/config/firebase';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { collection, getDocs, query, where, limit} from 'firebase/firestore';

interface LoginFormData {
    userEmail: string;
    userPassword: string;
}

export const Login = () => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const schema = yup.object().shape({
        userEmail: yup.string().email("Must be a valid email...").required("Email field is Required..."),
        userPassword: yup.string().required("Password field is Required...")
    });
    const {register, handleSubmit, formState: {errors}} = useForm <LoginFormData> ({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        let errorMessage = "";
        if(errors.userEmail) {
            errorMessage += `<div>${errors.userEmail?.message}</div>`;
        }
        if(errors.userPassword) {
            errorMessage += `<div>${errors.userPassword?.message}</div>`;
        }
        setErrorMessage(errorMessage);
        setIsErrorModalOpen(!!errorMessage);
    }, [errors]);
    const userAssetsRef = collection(db, "userAssets");

    const doLogin = async (inputData: LoginFormData) => {
        try {
            // Step 1: Check if email is registered
            const signInMethods = await fetchSignInMethodsForEmail(auth, inputData.userEmail);
            if (signInMethods.length === 0) {
                throw new Error("Email is not registered...");
            }
            // Step 2: Verify email and password
            const queryDoc = query(
                userAssetsRef,
                where("email", "==", inputData.userEmail),
                limit(1)
            );
            const result = await getDocs(queryDoc);
            if (result.docs.length === 0) {
                throw new Error("Email or password are not valid.");
            }
            const userData = result.docs[0].data();
            if (userData.password !== inputData.userPassword) {
                throw new Error("Email or password are not valid.");
            }
            // Step 3: Authenticate user
            await signInWithEmailAndPassword(auth, inputData.userEmail, inputData.userPassword);
            
            // Step 4: Redirect to home page
            switch (userData.accountType) {
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
        } catch (err: unknown) {
            // Step 5: Load modal for the errors
            if(err instanceof Error) {
                console.error(err);
                setErrorMessage(err.message);
                setIsErrorModalOpen(true);
            }
        }
    };
    return (
        <div className = "login-wrapper">
            {isErrorModalOpen && (
                <Modal closeModal={() => setIsErrorModalOpen(false)} errorMessage={errorMessage}> </Modal>
            )}
            <div className = "login-form-box">
                <div className ="login-input-group">
                    <form onSubmit= {handleSubmit(doLogin)}>
                        <input className = "login-username-field" placeholder = "Email..." type = "text" {...register("userEmail")}/>;
                        <input className = "login-password-field" placeholder = "Password..." type = "password" {...register("userPassword")}/>;
                        <input className = "login-btn" type = "submit"/>
                    </form>
                    <button className ="login-SignUp-btn" onClick={() => navigate("/Signup")}>Sign Up</button>
                </div>
                <Decorations />
            </div>
        </div>
    )
}