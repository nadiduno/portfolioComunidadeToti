import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { LinkPage } from './pages/LinkPage'

export function Router () {
  return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/contato' element={<ContactPage />} />
            <Route path='/link' element={<LinkPage />} />
        </Routes>
  )
}
