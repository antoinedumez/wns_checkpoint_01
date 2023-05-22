import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
    return (
        <div>
            <h1>Home</h1>
            <Routes>
                <Route path="/" element={<ContinentsPage />} />
                <Route path="/countries/:code" element={<CountriesPage />} />
                <Route path="/country/:code" element={<CountryPage />} />
            </Routes>
        </div>
    )
}
export default App;