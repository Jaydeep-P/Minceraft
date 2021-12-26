import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import Singleplayer from './Singleplayer/Singleplayer';
import Multiplayer from './Multiplayer/Multiplayer';
import Play from './Play/Play';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/singleplayer" element={<Singleplayer />} />
            <Route path="/multiplayer" element={<Multiplayer />} />
            <Route path="/play" element={<Play/>} />
            <Route path="/r" element={<App hasLoadedOnce={true} />} />
            <Route path="/" element={<App />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


