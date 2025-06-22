
import './App.css'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserDashboard from './Components/UserDashboard'
import SendMoney from './Pages/SendMoney';
import BalanceOverview from './Pages/BalanceOverview';
import UserRecentTransactions from './Pages/UserRecentTransactions';
import AdminDashBoard from './Components/AdminDashBoard';
import UserManagement from './Pages/UserManagement';
import Statistics from './Pages/Statistics';
import StatusRatioChart from './Components/StatusRatioChart';
import ProtectedRoute from './Components/ProtectedRoute';
import UnauthorizedPage from './Components/UnauthorizedPage';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>


        <Route path='/user-dashboard' element={
          <ProtectedRoute requiredRole="ROLE_USER">
            <UserDashboard/>
          </ProtectedRoute>
        }></Route>


        <Route path='/send' element=
        {
          <ProtectedRoute requiredRole="ROLE_USER">
            <SendMoney/>
          </ProtectedRoute>
        }></Route>

        <Route path='/balance' element={        
            <ProtectedRoute requiredRole="ROLE_USER">
            <BalanceOverview/>
          </ProtectedRoute>}></Route>
        <Route path='/transactions' element={         
           <ProtectedRoute requiredRole="ROLE_USER">
            <UserRecentTransactions/>
          </ProtectedRoute>}></Route>

        <Route path='/admin-dashboard' element={      
          <ProtectedRoute requiredRole="ROLE_ADMIN">
            <AdminDashBoard/>
          </ProtectedRoute>}></Route>
        
        <Route path='/admin/users' element={
          <ProtectedRoute requiredRole="ROLE_ADMIN">
            <UserManagement/>
          </ProtectedRoute>
        }></Route>
        <Route path='/admin/statistics' element={
          <ProtectedRoute requiredRole="ROLE_ADMIN">
            <Statistics/>
          </ProtectedRoute>
          }></Route>
        <Route path='/unauthorized' element={<UnauthorizedPage/>}></Route>
        
      </Routes> 
    </Router>
  )
}

export default App
