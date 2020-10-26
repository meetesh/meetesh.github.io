import React from "react"
import { graphql } from "gatsby"
import BlogPostList from "../components/blogPost"
import Header from "../components/header"
import Footer from "../components/footer"
import 'normalize.css'
import '../styles/global.css'
import '../styles/index.css'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
        <Header  />
        <BlogPostList posts={posts} />
        <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
