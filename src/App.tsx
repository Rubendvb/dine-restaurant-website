import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Booking } from './pages/Booking'
import { ErrorPage } from './pages/404'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
