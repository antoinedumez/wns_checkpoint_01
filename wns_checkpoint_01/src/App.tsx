import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ContinentsPage />} />
                <Route path="/countries/:name/:code" element={<CountriesPage />} />
                <Route path="/country/:code" element={<CountryPage />} />
            </Routes>
        </div>
    )
}
export default App;