import { Route, Routes } from 'react-router-dom'; 
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;