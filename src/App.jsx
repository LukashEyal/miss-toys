import './styles/main.scss'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToyIndex } from './cmps/ToyIndex'
import { ToyDetails } from './cmps/ToyDetails'
import { ToyEditModal } from './cmps/ToyEditModal'

function App() {
  return (
    <BrowserRouter>
      <section className="main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/toy" element={<ToyIndex />}>
            <Route path="/toy/edit/:toyId" element={<ToyEditModal />} />
          </Route>
          /
          <Route path="/toy/:toyId?" element={<ToyDetails />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
