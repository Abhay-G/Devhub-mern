import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components';
import { Home, Login, Register } from './pages';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
