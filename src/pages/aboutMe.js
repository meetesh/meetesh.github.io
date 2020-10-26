import React from "react"
import { withHeaderAndFooter } from "../components/utils"
import "../styles/aboutMe.css"

export const AboutMe = () => {
  return (
    <div>
      <table className="intro-table">
        <tr>
          <td>Name</td>
          <td>Meetesh Kumawat</td>
        </tr>
        <tr>
          <td>About</td>
          <td>
            I am Software Developer, working with Thoughtworks. I have total{" "}
            {new Date().getFullYear() - 2016} years of experience. I like
            programming and love teaching about it. I also like to do swimming
            and playing chess.
          </td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>kmeetesh@gmail.com</td>
        </tr>
        <tr>
          <td>Social</td>
          <td>
            <a href="https://www.twitter.com/itsmeetesh" target="__blank">
              Twitter
            </a>
            ,
            <a href="https://www.linkedin.com/in/itsmeetesh" target="__blank">
              LinkedIn
            </a>
            ,
            <a href="https://www.github.com/meetesh" target="__blank">
              Github
            </a>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default withHeaderAndFooter(AboutMe, "About Me!")
