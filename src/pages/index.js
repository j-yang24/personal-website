import * as React from 'react'
import Layout from '../components/layout'
import BlackBarDivider from '../components/BlackBarDivider'
import Seo from '../components/seo'

const blogPosts = [
  { title: 'Post 1', summary: 'Summary of blog post 1.' },
  { title: 'Post 2', summary: 'Summary of blog post 2.' },
  { title: 'Post 3', summary: 'Summary of blog post 3.' },
  { title: 'Post 4', summary: 'Summary of blog post 4.' },
  { title: 'Post 5', summary: 'Summary of blog post 5.' },
  { title: 'Post 6', summary: 'Summary of blog post 6.' },
]


const IndexPage = () => {
  return (
    <Layout pageTitle="a blog by Johnson Yang">

      <p align="justify">
        I was born in Manhattan and spent my early childhood with my grandparents.
        At seven, I moved to Emmaus to live with my parents, where I helped out in the family restaurant after school.
        After high school, I attended the University of Pittsburgh to study civil engineering.
        I now reside in Pittsburgh.
      </p>
      <BlackBarDivider />

      <div className="grid-container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>

      <BlackBarDivider />
      <footer align="center">&#169; 2025 Johnson Yang</footer>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage