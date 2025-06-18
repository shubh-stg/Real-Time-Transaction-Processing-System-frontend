
import './App.css'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserDashboard from './Components/UserDashboard'
import SendMoney from './Pages/SendMoney';
import BalanceOverview from './Pages/BalanceOverview';
import UserRecentTransactions from './Pages/UserRecentTransactions';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/userdashboard' element={<UserDashboard/>}></Route>
        <Route path='/send' element={<SendMoney/>}></Route>
        <Route path='/balance' element={<BalanceOverview/>}></Route>
        <Route path='/transactions' element={<UserRecentTransactions/>}></Route>
      </Routes> 
    </Router>
  )
}

export default App
