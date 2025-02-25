import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Components/LandingPage/landingPage'
import LandingPage from './Components/LandingPage/landingPage'
import RegisterPage from './Components/RegisterComponent/RegisterPage'
import LoginPage from './Components/Login/Login'
import VisaExperiences from './Components/VisaExperiences/VisaExperiences'
import NavBar from './Components/NavBar/NavBar'
import Notification from './Components/Notifications/Notification'


function App() {
  return(
    <BrowserRouter>
    <Notification/>
    <NavBar/>
    <div>
    <Routes>
      <Route exact path="/" element ={<LandingPage/>}/>
      <Route exact path="/register" element ={<RegisterPage/>}/>
      <Route exact path="/login" element ={<LoginPage/>}/>
      <Route exact path="/visa-experiences" element ={<VisaExperiences/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
