
import { HashRouter, Routes, Route } from 'react-router'
import PinsAndCurvesClient from './PinsAndCurvesClient'
import Launcher from './Launcher'
import Home from './Home'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="run/:serverUrl" element={<PinsAndCurvesClient />} />
      </Routes>
    </HashRouter>
  )
}

export default App
