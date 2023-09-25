<<<<<<< HEAD

import React, { useState, useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { socketContext } from './socketContext';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL


function Room() {
  const params = useParams();
  //const socket = useRef();
  const [playersSigned, setPlayersSigned] = useState([]);
  const playerArray = [];

  useEffect(() => {
    //socket.current = io('http://localhost:3000')

    socket.on('playerJoined', (playerName) =>{ 
      setPlayersSigned(playerName.map(player => player.name));
      console.log("signed player"+ JSON.stringify(playerName))
    playerArray.push(playerName);}
   )
    console.log("connected to web socket server");

    console.log("connected to web socket server2");

  }, [])

  
=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import io from 'socket.io-client';

function Room() {
  const params = useParams();
  const playerName = localStorage.getItem("username");
  const roomId = params.roomId;

  const [quizStarted, setQuizStarted] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("quizStarted", () => {
      console.log("Quiz has started");
      setQuizStarted(true);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startQuiz = () => {
    socket.emit("startQuiz", roomId);
  };
>>>>>>> c822e1880c21afd27b98bf03b900c59c83469986

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Room information</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="form-group">
<<<<<<< HEAD
            <label>Players:</label>
            <ul>{playersSigned.map((player, index) => (
                <li key={index}>{player}</li>
              ))}</ul>
=======
            <label>Players: {playerName}</label>
>>>>>>> c822e1880c21afd27b98bf03b900c59c83469986
          </div>

          <div className="text-center">
            {!quizStarted ? (
              <button className="btn btn-primary my-3 p-3" onClick={startQuiz}>
                Start Quiz
              </button>
            ) : (
              <p>Quiz has started. Go to the quiz page...</p>
            )}
            <div className="alert alert-success mt-2" role="alert">
              Quiz created with key: <strong>{params.roomId}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
