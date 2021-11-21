import React, { useEffect, useState } from 'react';

import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,

    signOut
} from "firebase/auth";
import initilizeAuthentication from '../firebase/firebase.init';


initilizeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerWithEmailPassword = (name, email, password, redirect_url, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        history.push("/home");
                        window.location.reload();
                    })
            })
            .finally(() => { setIsLoading(false) })
            .catch((error) => {
                setError(error.message);
            });
    }
    

    const logInWithEmailPassword = (email, password, redirect_url, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                history.push(redirect_url);
                setError('')
            })
            .finally(() => { setIsLoading(false) })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingGoogle = (redirect_url, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }


    return {
        user,
        isLoading,
        setUser,
        signInUsingGoogle,
        registerWithEmailPassword,
        logInWithEmailPassword,
        logOut
    }
};

export default useFirebase;