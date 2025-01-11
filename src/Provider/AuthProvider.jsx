import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.config";
import axios from "axios";
// import axios from "axios";



export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () => {
        signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('http://localhost:3000/jwt', user, { withCredentials: true })
                    .then(() => {
                        // const data = res.data
                        // console.log(data)
                        setLoading(false);
                    })
            }
            else {
                axios.post('http://localhost:3000/logout', {}, {withCredentials: true})
                .then(res=> {
                    console.log('logout', res.data)
                    setLoading(false);
                })
            }
        })

        return () => {
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        updateUser,
        logout,
        googleSignUp,
        setUser



    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
