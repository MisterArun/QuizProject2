import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketContext } from './socketContext';
import { Link } from "react-router-dom";
const SERVER_HOST = 'http://localhost:3000'



function Results() {
    const socket = useRef();
    
    
    useEffect(() =>{
        socket.current = io(SERVER_HOST)
        console.log("connected to web socket server");   
        
    }, [])
  return (
    
    <socketContext.Provider value={socket.current}><div className="text-center mt-5">
    <h1>Result Page</h1>
    <p className="mt-5"></p>
    
    <table class="table table-striped table-hover mx-auto w-auto">
    <tr>
        <th>Top 5:</th>
        <th>The top 5</th>
    </tr>
    <tr>
        <th>Your score</th>
        <th>The score</th>
    </tr>
    </table>
    
    <div>
   
    <Link to="/">
        <button className="btn btn-success px-3 py-2 fs-6 mt-4">Home</button>
        </Link>
    
    </div>
</div>
</socketContext.Provider>
   
  )
}

export default Results
