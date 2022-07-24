import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <img src="./workinprogress.png"></img>
    <h1>Hi! Welkom!
        <br> This page is still in progress</br>
    </h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound