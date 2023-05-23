import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginwithemail from './pages/Loginwithemail/Loginwithemail'
import Loginwithgoogle from './pages/Loginwithgoogle/Loginwithgoogle'
import Navigation from './Components/Navigation/Navigation'
import Cars from './pages/Cars/Cars'
import File from './pages/Files/File'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Loginwithemail/>}/>
      <Route path='/google' element={<Loginwithgoogle/>}/>
      <Route path='/Cars' element={<Cars/>}/> 
      <Route path='/files' element={<File/>}/>  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
