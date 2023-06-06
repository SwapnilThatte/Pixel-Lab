import { Home } from "./pages/home/Home"
import './App.css'
import { Editing } from "./pages/editing/Editing"
import { Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route  path="/edit" element={<Editing/>}></Route>
    </Routes>
    </>
  )
}

export default App
