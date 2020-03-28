import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Noticias from './Components/Noticias';
import logo from '../src/Components/images/Noti2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    
    <div>
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <Noticias />
     
    </div>
  );
}

export default App;
