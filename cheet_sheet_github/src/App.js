import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamWork from "./pages/TeamWork";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/TeamWork' element={<TeamWork/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
