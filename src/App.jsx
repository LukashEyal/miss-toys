import { AppHeader } from './cmps/AppHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToyIndex } from './cmps/ToyIndex'

function App() {
  return (
    <BrowserRouter>
      <section className="app main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<ToyIndex />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
