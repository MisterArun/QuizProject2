import React, { useContext, useEffect } from 'react'
import { socketContext } from './socketContext'
import { Link } from "react-router-dom";

function MultiplayerChoice() {
    const socket = useContext(socketContext);

    useEffect(() => {
      if(socket) {
        socket.emit();
      } else {
        console.error('No socket');
      }
    },[])

  return (
    <div>
       <Link to="/multiplayer/signInPlayer">
        <button className="btn btn-success px-3 py-2 fs-6 mt-4">Join</button>
        </Link>
       
    </div>
  )
}

export default MultiplayerChoice