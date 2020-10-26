import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
export default function Header() {
  return (
    <header className="main-header">
      <h1 className="main-header__h1">Meetesh's blog</h1>
      <nav>
        <ul className="main-header__ul">
          <li>
            <Link to="/"> Home</Link>
          </li>
          {/* <li>
            <Link to="/tags">Tags</Link>
          </li> */}
          <li>
            <Link to="/aboutMe">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
