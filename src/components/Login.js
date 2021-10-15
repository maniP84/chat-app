import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// Icons
import google from "../assets/google.svg"
import gif from "../assets/CornyReflectingCalf-size_restricted.gif"

//Styles
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <img className={styles.gif} src={gif} alt='gif'/>
            <div className={styles.loginCard}>
                <h2>Welcome to Manigram</h2>
                <div 
                className={styles.button}
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt="google"/> Sing in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;