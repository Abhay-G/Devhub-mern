import React from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components';
import { Home, Login, Register, Authenticate, Activate, Rooms } from './pages';

const isAuth = false;
const user = {
    activated: false,
};
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<GuestRoute component={<Home />} />} />
                <Route
                    path='/authenticate'
                    element={<GuestRoute component={<Authenticate />} />}
                />
                <Route
                    path='/activate'
                    element={<SemiProtectedRoute component={<Activate />} />}
                />
                <Route
                    path='/rooms'
                    element={<ProtectedRoute component={<Rooms />} />}
                />
            </Routes>
        </>
    );
};

const GuestRoute = ({ component }) => {
    return isAuth ? <Navigate replace to='/rooms' /> : component;
};
const SemiProtectedRoute = ({ component }) => {
    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.activated ? (
        component
    ) : (
        <Navigate replace to='/rooms' />
    );
};
const ProtectedRoute = ({ component }) => {
    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.activated ? (
        <Navigate replace to='/activate' />
    ) : (
        component
    );
};
export default App;
