import React, { useState, useEffect, useRef } from 'react';
import { Button , FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from "./facebook-messenger.svg";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import ScrollableFeed from 'react-scrollable-feed'

import tickAudio from './sounds/tick.mp3';
import useSound from 'use-sound';



function App() {
  const [input,setInput]=useState("");
  const [message,setMessage]=useState([]);
  const [userName,setUsername]= useState("");
  const divRef = useRef(null);
  const [play] = useSound(tickAudio);


  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });


  useEffect(() => {
     db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>{
       setMessage(snapshot.docs.map(doc=>({id: doc.id,message:doc.data()})))
     } )
  }, [])

  useEffect(() => {
    // const name=prompt("Please enter the your name");
    setUsername(prompt("Please enter the your name"));
  }, [])//runs on condition(here on page loads)

  const sendMessage= ( event)=>{

    db.collection('messages').add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage([...message,{username: userName, message: input}])
    setInput("")
    play()//audio
    event.preventDefault()
  }
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="img"/>
      <h1>Facebook-Messenger-Clone</h1>
  <h3>Welcome {userName}</h3>
      <form className="form">
      <FormControl className="formcontrol">
        
        <Input className="input" placeholder="Enter a message" type="text" value={input} onChange={(event)=> setInput(event.target.value)}></Input>
        <IconButton
        className="iconBtn"
        variant="contained" 
        color="primary" 
        disabled={!input}
         type="submit"
          onClick={sendMessage}
       
        >
          <SendIcon></SendIcon>
        </IconButton>
        
       
       
      </FormControl>
        
      </form>
      
      {
        
        message.map(({id,message})=>{
          return <Message key={id} message={message}  username={userName}/>
        })
       
      }
     
      

      <div ref={divRef} className="bottomGap" >

      </div>
     
    </div>
  );
}

export default App;
