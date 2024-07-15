import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import NovoVideo from './pages/NovoVideo';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/novovideo" element={<NovoVideo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;