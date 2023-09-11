import React, { useContext } from 'react'
import { socketContext } from './socketContext'

function MultiplayerChoice() {
    const socket = useContext(socketContext);

    socket.emit();
  return (
    <div>
        <button>Join</button>
        <button>Host</button>
    </div>
  )
}

export default MultiplayerChoice