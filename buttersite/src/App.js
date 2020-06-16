import React from 'react';
import { RecoilRoot } from 'recoil';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import MessageForm from './components/MessageForm/MessageForm'
import Oauth2 from './components/auth/oauth'



function App() {
  return (
    <div className="App">
      <RecoilRoot> 
        <Router>
          <Oauth2/>
          <MessageForm />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
