import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';

function App() {
    return (
        <div>
            <h1>Home</h1>
            <Routes>
                <Route path="/" element={<ContinentsPage />} />
                <Route path="/countries/:code" element={<CountriesPage />} />
            </Routes>
        </div>
    )
}
export default App;