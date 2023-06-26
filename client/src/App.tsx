import { Home } from "./pages/home/Home"
import './App.css'
import { Editing } from "./pages/editing/Editing"
import { Routes, Route } from 'react-router-dom'
import { SuperRes } from "./pages/superResolution/SuperRes"
import { ImageGeneration } from "./pages/imgGeneration/ImageGeneration"
function App() {
  

  return (
    <>
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route  path="/edit" element={<Editing/>}></Route>
      <Route  path="/super-resolution" element={<SuperRes/>}></Route>
      <Route  path="/image-gen-ai" element={<ImageGeneration/>}></Route>
    </Routes>
    </>
  )
}

export default App
