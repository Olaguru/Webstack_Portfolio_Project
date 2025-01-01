import { Route, Routes } from 'react-router-dom'; 
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Invoices from './Components/Invoice/Invoice';
import Settings from './Components/Settings/Settings';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/invoice' element={<Invoices />} />
            <Route path='/settings' element={<Settings />} />

        </Routes>
    );
};

export default AppRoutes;