import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import BlackBarDivider from '../components/BlackBarDivider'
import CoverBlogPage from '../components/CoverBlogPage'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="a blog by Johnson Yang">

      <BlackBarDivider />

      <StaticImage alt="random iamge" src="../images/test.jpg"/>

      <CoverBlogPage />

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage