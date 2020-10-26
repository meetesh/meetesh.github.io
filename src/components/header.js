import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/header.css"
export default function Header(props) {
  const title = props.pageName ? "| " + props.pageName : ""
  return (
    <header className="main-header">
      <Helmet title={`Meetesh's Blog ${title}`} />

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
