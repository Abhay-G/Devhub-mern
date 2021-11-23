import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Navbar, Loader } from './components';
import { Home, Authenticate, Activate, Rooms, Room } from './pages';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const { loading } = useLoadingWithRefresh();
    return loading ? (
        <Loader message='Loading in progress' />
    ) : (
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
                <Route
                    path='/room/:id'
                    element={<ProtectedRoute component={<Room />} />}
                />
            </Routes>
            <ToastContainer />
        </>
    );
};

const GuestRoute = ({ component }) => {
    const { isAuth } = useSelector((state) => state.auth);

    return isAuth ? <Navigate replace to='/rooms' /> : component;
};
const SemiProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);

    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.activated ? (
        component
    ) : (
        <Navigate replace to='/rooms' />
    );
};
const ProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);
    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.activated ? (
        <Navigate replace to='/activate' />
    ) : (
        component
    );
};
export default App;
