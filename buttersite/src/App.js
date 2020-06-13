import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';

import MessageForm from './components/MessageForm/MessageForm'
import Oauth2 from './components/auth/oauth'



function App() {
  return (
    <div className="App">
      <RecoilRoot> 
          <Oauth2/>
          <MessageForm />
      </RecoilRoot>
    </div>
  );
}

export default App;
