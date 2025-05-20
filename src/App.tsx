
import { HashRouter, Routes, Route } from 'react-router'
import PinsAndCurvesClient from './PinsAndCurvesClient'
import Launcher from './Launcher'
import Home from './Home/Home'
import Tools from './Tools/Tools'
import PrivacyPolicy from './PrivacyPolicy'
import Imprint from './Imprint'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Tools />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="run/:serverUrl" element={<PinsAndCurvesClient />} />
      </Routes>
    </HashRouter>
  )
}

export default App
