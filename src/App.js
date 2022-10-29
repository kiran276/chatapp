import React from 'react';
import socketIO from 'socket.io-client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Join from './component/Join/Join';
import '../src/App.css'
import Chats from './component/Chats/Chats';
const ENDPOINT= 'https://demo-chat-app7387.herokuapp.com/';
const socket=socketIO(ENDPOINT,{transports:['websocket']})

const App = () => {
socket.on("connect",()=>{
  console.log("New connection");


  
})
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Join/>}/>
        <Route exact path='/chats' element={<Chats/>}/>
        

       
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
