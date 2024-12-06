
import { BrowserRouter, Routes, Route } from 'react-router'
import PinsAndCurvesClient from './PinsAndCurvesClient'
import Home from './Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="run/:serverUrl" element={<PinsAndCurvesClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
