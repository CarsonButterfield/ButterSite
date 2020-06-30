import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import NavBar from './components/navbar/NavBar'
import GuildContainer from './components/Guild/GuildContainer'


function App() {
  return (
    <div className="App">
      <RecoilRoot> 
        <Router>
          <NavBar/>
          <Suspense fallback={<p>Loading</p>}> 
          <GuildContainer/>
          </Suspense>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
