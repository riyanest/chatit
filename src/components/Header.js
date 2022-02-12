import React from 'react'
import { auth } from '../firebase.js'

function Header() {
    const signout=()=>{ 
        auth.signOut()
    }
    return (
        <div className="head">
            <button className="btn" onClick={signout}>Sign Out</button>
        </div>
    )
}

export default Header
