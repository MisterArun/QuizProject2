import React, { useContext, useEffect } from 'react';
import { socketContext } from './socketContext';
import { Link } from "react-router-dom";

function MultiplayerChoice() {
    const socket = useContext(socketContext);

    useEffect(() => {
        if (socket) {
            socket.emit();
        } else {
            console.error('No socket');
        }
    }, []);

    const buttonStyle = {
        width: '200px',
        height: '60px',
        fontSize: '1.2rem',
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="mb-4">
                <h1>Choose An Option</h1>
            </div>
            <Link to="/multiplayer/signInPlayer" className="m-2">
                <div className="text-center">
                    <button className="btn btn-success" style={buttonStyle}>Join</button>
                </div>
            </Link>
            <Link to="/multiplayer/createQuiz" className="m-2">
                <div className="text-center">
                    <button className="btn btn-success" style={buttonStyle}>Create</button>
                </div>
            </Link>
        </div>
    );
}

export default MultiplayerChoice;
