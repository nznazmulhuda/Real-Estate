import { createContext } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GithubAuthProvider,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../Firebase/Firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
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

    const authInfo = {
        createUser,
        googleUser,
        githubUser,
        emailLogin
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
