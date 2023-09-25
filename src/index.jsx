import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import Play from './Play'
import Leaderboard from './Leaderboard'
import SelectCategory from './SelectCategory'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Multiplayer from './multiplayer';
import MultiplayerChoice from './MultiplayerChoice';
import Results from './resultPage';
import SignInPlayer from './signInPlayer';
import Room from './Room'

import CreateQuiz from './CreateQuiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='multiplayer' element={<Multiplayer/>}>
          <Route path='choice' element={<MultiplayerChoice/>}/>
          <Route path="signInPlayer" element={<SignInPlayer />} />
          <Route path='createQuiz' element={<CreateQuiz/>} />
        </Route>
          <Route path='room/:roomId' element={<Room />}/> 
        <Route path="/resultPage" element={<Results />} />
        
        <Route path="/selectCategory" element={<SelectCategory />} />
        <Route path="/play" element={<Play />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  </BrowserRouter>
);

