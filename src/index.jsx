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

import CreateQuiz from './CreateQuiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='multiplayer' element={<Multiplayer/>}>
          <Route path='choice' element={<MultiplayerChoice/>}/>
          {/* <Route path='room/:' element={</>}/> */}
        </Route>
        <Route path="/resultPage" element={<Results />} />
        <Route path="/signInPlayer" element={<SignInPlayer />} />
        <Route path="/selectCategory" element={<SelectCategory />} />
        <Route path="/play" element={<Play />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path='/createQuiz' element={<CreateQuiz/>} />
    </Routes>
  </BrowserRouter>
);

