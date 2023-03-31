/*
*
*   Using FireStore Database, and User Authentication
*
*/

import { initializeApp } from "firebase/app";
import { getAuth, AuthCredential } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  /* SECRET */
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new AuthCredential();
export const db = getFirestore(app);
