import LandingPage from './pages/LandingPage'
import Homepage from './pages/Homepage'
import PlayersTable from './pages/PlayersTable'
import PageNotFound from './pages/PageNotFound'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/players" element={<PlayersTable />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
