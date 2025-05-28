import * as React from 'react'
import Layout from '../components/layout'
import BlackBarDivider from '../components/BlackBarDivider'
import Seo from '../components/seo'
import BlogGrid from '../components/BlogGrid';


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

      <BlogGrid />

      <BlackBarDivider />
      <footer align="center">&#169; 2025 Johnson Yang</footer>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage