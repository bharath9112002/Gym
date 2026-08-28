import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CoachDetail from './pages/CoachDetail'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaches/:slug" element={<CoachDetail />} />
    </Routes>
  )
}

export default App
