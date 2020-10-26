import React from "react"
import { Link } from "gatsby"

export default function BlogPostList({ posts }) {
  return (
    <main className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return <BlogPostPreview post={post} />
        })}
    </main>
  )
}

function BlogPostPreview({ post }) {
  return (
    <div className="blog-post-preview" key={post.id}>
      <h2>
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h2>
      <h3>{post.frontmatter.date}</h3>
      <p>{post.excerpt}</p>
    </div>
  )
}
