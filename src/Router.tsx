/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { JobPage } from './pages/JobPage'

export function Router () {
  return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/trabalhos' element={<JobPage />} />
            <Route path='/contato' element={<ContactPage />} />
        </Routes>
  )
}
