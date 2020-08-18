import React from 'react';
import { RecoilRoot } from 'recoil';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import NavBar from './components/navbar/NavBar'
import LeftNavContainer from './components/LeftNav/LeftNavContainer';
import GraphContainer from './components/Graphs/GraphContainer'

function App() {
  return (
    <div className="App">
      <RecoilRoot> 
        <Router>
          <NavBar/>
          <LeftNavContainer/>
            <GraphContainer/>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
