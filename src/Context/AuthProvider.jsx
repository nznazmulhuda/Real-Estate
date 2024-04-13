import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./../Firebase/Firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Create user by email and password
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // Create user by google account
    const googleUser = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Create user by github account
    const githubUser = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Login user by email and pass
    const emailLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const signOutUser = () => {
        signOut(auth)
            .then(() => toast.success("Sign out success!"))
            .catch((e) => toast.error(e.message));
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        googleUser,
        githubUser,
        emailLogin,
        user,
        signOutUser,
    };

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
