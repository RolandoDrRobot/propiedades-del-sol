
import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import Settings from '../../components/Settings/index';
import './main.css';

function Home() {
  return (
    <>
      <div className="home">
        {<Homescreen/>}
      </div>
    </>
  )
}

export default Home;
