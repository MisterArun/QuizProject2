import React from "react";
import { useParams } from "react-router-dom";

function Room() {
  const params = useParams();

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Room information</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="form-group">
            <label>Players: {}</label>
          </div>

          <div className="text-center">
            <button className="btn btn-primary my-3 p-3">Start Quiz</button>
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
