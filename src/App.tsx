
import { Route, Routes } from 'react-router'
import AboutUs from './AboutUs'
import './App.css'
import Cart from './Cart'
import ColleagueLogin from './ColleagueLogin'
import CustomerLogin from './CustomerLogin'
import Home from './Home'
import NewArrival from './NewArrival'
import Sales from './Sales'
import SetPottery from './SetPottery'
import SinglePottery from './SinglePottery'
import InsertPottery from './InsertPottery'

const App: React.FC = () => {


  return (

    <Routes>
      <Route path="/New Arrival" element={<NewArrival />} />
      <Route path="/Set Pottery" element={<SetPottery />} />
      <Route path="/Single Pottery" element={<SinglePottery />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Sales" element={<Sales />} />
      <Route path="/colleagueLogin" element={<ColleagueLogin />} />
      <Route path="/customerLogin" element={<CustomerLogin />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/insertPottery" element={<InsertPottery />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
