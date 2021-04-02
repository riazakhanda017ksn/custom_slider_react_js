import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LogIn.css'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';



const LogIn = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSingedIn: true,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false,

    })

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // var token = credential.accessToken;
                const {
                    displayName, email
                } = result.user;
                const singInUser = { name: displayName, email }
                setLoggedInUser(singInUser)
                history.replace(from)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    ///// Sing in with email address and password ////

    const handleBlur = (event) => {
        let isFormValid = true
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;

        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }


    }



    /////full-form-submit////
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserName(user.name)
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    console.log('here the information',res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }
    const updateUserName=name=>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
        }).then(function() {
            console.log('user name updated successfully');
         
        }).catch(function(error) {
        console.log(error);
        });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-area mt-5">
                                <div className="div-for-caption-for-form-ar">
                                 <h5>{newUser ? 'Create An Account' : 'Hey Sir Welcome ! Log In Your Account '}</h5>
                                </div>
                                {newUser && <input type="text" className="form-control" onBlur={handleBlur} placeholder="Enter Your Name" name="name" />} <br />
                                <input type="email" className="form-control" onBlur={handleBlur} placeholder="Enter Your Email" name="email" id="" required /> <br />
                                <input type="password" className="form-control" onBlur={handleBlur} placeholder="Enter Your Password" name="password" id="" required /><br />
                                <input type="submit" className="form-control btn btn-outline-secondary" value={newUser ? 'Create An Account' : "Log In"} />
                                <div className="newUsers mt-4 text-center">
                                <label htmlFor="" className='edit'>{newUser ? 'If you are an old user then log in and check your products':'If you are a new user, create an account soon !!'}</label>
                                    <button className='btn btn-info' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Create An New Account' } </button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <br />

                        <div className="row">
                            <div className="google-sing-in d-flex mb-5 cursor-pointer mb-5" onClick={handleGoogleSingIn}>
                                <div className="col-lg-3">
                                    <div className="button-area">
                                        <button className="btn btn-info-outline text-success "><FontAwesomeIcon icon={faGoogle} /> </button>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                                <div className="col-lg-3">
                                    <div className="sing-in-text"><a href="">Sing In With Google</a></div>

                                </div>
                            </div>
                            <h5 className="style"><span>{user.error}</span></h5>
                            <br />
                            {user.success && <h5 className="styleTwo"><span>User {newUser ? 'Created' : 'Logged In'} Successfully ! Check Your Product Sir !</span></h5>}
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;