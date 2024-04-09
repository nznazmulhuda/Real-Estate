import { createContext } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
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

    const authInfo = {
        createUser,
        googleUser,
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
