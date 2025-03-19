import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default GlobalRoutes
