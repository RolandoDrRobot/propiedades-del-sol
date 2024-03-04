import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import ConnectOnPageLoad from './components/ConnectOnPageLoad/index';
import Home from './views/Home/index';
import Invest from './views/Invest/index';
import News from './views/News/index';
import Stake from './views/Stake/index';
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ConnectOnPageLoad />
      <Header/>
      <div id="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/invest' element={<Invest/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/stake' element={<Stake/>}/>
        </Routes>
      </div>
      <Navbar/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
