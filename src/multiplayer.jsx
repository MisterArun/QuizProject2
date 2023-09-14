import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketContext } from './socketContext';
const SERVER_HOST = 'http://localhost:3000'


function Multiplayer() {
    const socket = useRef();
    const navigate = useNavigate()
    
    useEffect(() =>{
        socket.current = io(SERVER_HOST)
        console.log("connected to web socket server");   
        navigate('choice');     
    }, [])
  return (
    
    <socketContext.Provider value={socket.current}> <div>
    <button>Join</button>
    <button>Host</button>
</div></socketContext.Provider>
   
  )
}

export default Multiplayer
