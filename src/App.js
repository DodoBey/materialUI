import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <>
    <Login/>
    <Register/>
    </>
  );
}

export default App;
