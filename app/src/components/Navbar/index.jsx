import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="container d-flex">
          <Link to="/" className="button">
            Home
          </Link>
          <Link to="/invest" className="button">
            invest
          </Link>
          <Link to="/stake" className="button">
            Stake
          </Link>
          <Link to="/news" className="button">
            news
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
