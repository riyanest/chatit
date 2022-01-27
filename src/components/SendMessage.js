import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
const [pickerheight, setpickerheight]=useState(0)
    // const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        // setChosenEmoji(emojiObject);
        setMsg(msg+emojiObject.emoji)
    };
     const emojipicker=()=>{
        var ph=pickerheight
        ph=ph==0?320:0
        setpickerheight(ph)
        // document.getElementById("emojipicker").height=document.getElementById("emojipicker").height=0?320:0
     }
    const EmojiData = ({ chosenEmoji }) => (
        <div>
          <strong>Unified:</strong> {chosenEmoji.unified}
          <br />
          <strong>Names:</strong> {chosenEmoji.names.join(', ')}
          <br />
          <strong>Symbol:</strong> {chosenEmoji.emoji}
          <br />
          <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
        </div>
      );
    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })   
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">

                    <input className="input" placeholder="Type a message"  type="text" value={msg} onChange={e => setMsg(e.target.value)}  />
<div                    id="emojipicker" style={{height:pickerheight}}  >
<Picker
                        onEmojiClick={onEmojiClick}
                        disableAutoFocus={true}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                        groupNames={{ smileys_people: 'PEOPLE' }}
                        native
                    /></div>                    
                    <button className="btn" type="button" onClick={emojipicker}>😁</button>
      {/* {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />} */}
                    <button type="submit" className="btn">   
                        <svg width="40px" height="40px" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#a9a9a9" stroke="none">
                                <path  d="M302 491 c-106 -37 -200 -74 -209 -83 -25 -25 -10 -44 78 -100 73 -46 88 -61 136 -135 56 -87 75 -103 101 -86 9 5 46 103 84 219 72 223 76 255 26 253 -13 0 -110 -31 -216 -68z m169 -168 c-35 -109 -69 -204 -76 -211 -10 -11 -21 0 -59 61 -25 41 -46 79 -46 84 0 5 20 29 45 53 41 40 57 70 38 70 -4 0 -30 -23 -59 -51 l-51 -50 -76 48 c-42 26 -77 53 -77 59 0 15 402 154 414 143 6 -5 -15 -87 -53 -206z"/>
                            </g>
                        </svg>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default SendMessage
