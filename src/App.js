
import Chat from './components/Chat';
import './App.css';
import { useState } from 'react';
//import Chat from './components/Chat';
import MessageContext from "./components/context/context";
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
// import 'firebase/auth'
 import firebase from "firebase/app"
 
function App() {
  // const [user,setuser]=useState({});
  // const auth = getAuth();
  const [user,setUser] = useState(auth)
  const [chats,setChats]=useState([])
  console.log(user)
  auth.onAuthStateChanged(auth, (user) => {
    if (user.uid) {
      const uid = user.uid;
    } else {
      setUser(null)
    }
  });
  return (
    <MessageContext.Provider value={{chats,setChats}}>
      <div className="App">
        {user ? <Chat user={user} /> : <SignIn user={user} />}
      </div>
    </MessageContext.Provider>
  );
}

export default App;
