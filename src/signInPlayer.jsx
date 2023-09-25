import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketContext } from './socketContext';
import { Link } from "react-router-dom";
const SERVER_HOST = 'http://localhost:3000'



function SignInPlayer() {
    const socket = useContext(socketContext);
    const [roomNo, setRoomKey] = useState("");
    const [userName, setPlayerName] = useState("");
    
    useEffect(() =>{
        console.log("IN SIGN IN");
        
    }, [])

   
      function onSubmit(e) {
        e.preventDefault();
        const playerData = {
          username: userName,
          roomno: roomNo
        };
        
  
        console.log("RoomKey:"+playerData.roomno, "playerData:"+playerData.username)
        socket.on("quizCreated", (roomKey) => {
          window.location.href = `/room/${roomKey}`;
        });

      
        socket.emit("joinRoom", playerData)

        socket.on('playerJoined', (playerName) =>{ 
          console.log("signed player"+ JSON.stringify(playerName))}
       )

       //socket.emit("playerJoined", playerData);
    }
  


  return (
    <div>
<h1>Sign In Player</h1>
    <form onSubmit={onSubmit}>
    <div className="form-group"> 
      <label for="playerName">Player Name:   </label>
      <input
      type="text"          
      className="form-control"
      value={userName}          
      onChange={e => setPlayerName(e.target.value)}          
      />
    </div>

    <div className="form-group">
      <label for="roomNumber">Room Number:   </label>
      <input  
      type="text"
      className="form-control"
      value={roomNo}  
      onChange={e => setRoomKey(e.target.value)}
      />
    </div>

    <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
    </form>

    </div>
    
  )
}

export default SignInPlayer
