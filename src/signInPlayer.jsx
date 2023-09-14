import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketContext } from './socketContext';
import { Link } from "react-router-dom";
const SERVER_HOST = 'http://localhost:3000'



function SignInPlayer() {
    const socket = useRef();
    
    
    useEffect(() =>{
        socket.current = io(SERVER_HOST)
        console.log("connected to web socket server");   
        
    }, [])
  return (
    
    <socketContext.Provider value={socket.current}><div className="text-center mt-5">
    <h1>Sign In Player</h1>
    <p className="mt-5"></p>
    
    <div class="form-group">
      <label for="playerName">Player Name:   </label>
      <input
        id="playerName"
        name="playerName"
        placeholder="E.g. James"
      />
    </div>

    <br />
    <br />

    <div class="form-group">
      <label for="roomNumber">Room Number:   </label>
      <input
        id="roomNumber"
        name="roomNumber"
        placeholder="E.g. 1234"
      />
    </div>

    
    <div>
   
    <Link to="/">
        <button className="btn btn-success px-3 py-2 fs-6 mt-4">Join Room</button>
        </Link>
    
    </div>
</div>
</socketContext.Provider>
   
  )
}

export default SignInPlayer
