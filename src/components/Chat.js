import React, { useState, useEffect,useContext, useRef } from 'react'
import { db, auth } from '../firebase'
import MessageContext from "./context/context";
import SendMessage from './SendMessage'
import Header from './Header'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const {chats,setChats}=useContext(MessageContext)

    useEffect(() => {

        
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:"#e3e7ea"}}>
            <Header/>
            <div className="msgs">
            <div className="new">
                {
                chats.map((chat)=>{
                    return <p>{chat}</p>
                })
                }
            </div>
                {/* {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))} */}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
