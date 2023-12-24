import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export default function Navbar() {
  const amount =useSelector(state => state.amount)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div class="d-flex ms-auto">
            <button type="button" class="btn btn-warning" disabled ={true}>Your balance:{amount}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
