import React from "react"

const Input = ()=>{
    return(
        <form className="input-container">
            <input className="input" placeholder="Type a message"  type="text" />
            {/* <i  className="fas fa-arrow-circle-right"></i> */}
            <button style={{ background:"#2d3436",width:"55px",height:"55px",margin:"10px", boxShadow:"-3px -3px 7px #2d3436, 3px 3px 7px #2d3436",padding:"5px", color:"wheat", borderRadius:"30px",border:"none"}}>   
            <svg width="40px" height="40px" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#a9a9a9" stroke="none">
<path  d="M302 491 c-106 -37 -200 -74 -209 -83 -25 -25 -10 -44 78 -100 73 -46 88 -61 136 -135 56 -87 75 -103 101 -86 9 5 46 103 84 219 72 223 76 255 26 253 -13 0 -110 -31 -216 -68z m169 -168 c-35 -109 -69 -204 -76 -211 -10 -11 -21 0 -59 61 -25 41 -46 79 -46 84 0 5 20 29 45 53 41 40 57 70 38 70 -4 0 -30 -23 -59 -51 l-51 -50 -76 48 c-42 26 -77 53 -77 59 0 15 402 154 414 143 6 -5 -15 -87 -53 -206z"/>
</g>
</svg>
                </button>
            {/* <i className="fas fa-microphone"></i> */}

        </form>
    )
}

export default Input