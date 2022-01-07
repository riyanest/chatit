import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
//import { Button } from '@material-ui/core'


function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' ,backgroundColor: '#e3e7ea',width: '100vw',}}>
            <div style={{textAlign: 'center',color:"#708090"}}>
                <h1>Chat it!</h1>
                <button className="btn" onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    )
}

export default SignIn

