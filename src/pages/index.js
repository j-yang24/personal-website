import * as React from 'react'
import Layout from '../components/layout'
import BlackBarDivider from '../components/BlackBarDivider'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="a blog by Johnson Yang">

      <BlackBarDivider />

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage