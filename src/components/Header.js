import React from 'react'
import { auth } from '../firebase.js'

function Header() {
    return (
        <div className="head">
            <button className="btn" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Header
