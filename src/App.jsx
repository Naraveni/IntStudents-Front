import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './LandingPage/landingPage'
import LandingPage from './LandingPage/landingPage'
import NavBar from './Components/NavBar'


function App() {
  return(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element ={<LandingPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
