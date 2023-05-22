import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Continents from './Continents';

function App() {
    return (
        <div>
            <h1>Home</h1>
            <Routes>
                <Route path="/" element={<Continents />} />
            </Routes>
        </div>
    )
}
export default App;