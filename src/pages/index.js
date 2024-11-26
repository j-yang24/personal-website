import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle=" a blog by johnson yang">
      <p>Hello!</p>
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/test.jpg"
      /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage