import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header-container">
      <div className="header">
        <h1>Miss Toys</h1>
      </div>

      <nav className="app-header-nav">
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/toy">
          <h3>Our Toys!</h3>
        </NavLink>
        <NavLink to="/about">
          <h3>About</h3>
        </NavLink>
      </nav>
    </section>
  )
}
