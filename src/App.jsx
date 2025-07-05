import './index.css'

import { AppHeader } from './cmps/AppHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToyIndex } from './cmps/ToyIndex'

import { ToyEditModal } from './cmps/ToyEditModal'

function App() {
  return (
    <BrowserRouter>
      <section className="app main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<ToyIndex />} />
          <Route path="/toy/edit/:toyId" element={<ToyEditModal />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
