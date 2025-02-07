
import './App.css'
// import { Button } from './components/ui/button'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard/dashboard'



function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
