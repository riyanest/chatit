import React from "react"

const Input = ()=>{
    return(
        <form className="input-container">
            <input className="input" placeholder="Type a message"  type="text" />
            <i  className="fas fa-arrow-circle-right"></i>
            <i className="fas fa-microphone"></i>

        </form>
    )
}

export default Input