import * as React from 'react'
import Layout from '../components/layout'
import BlackBarDivider from '../components/BlackBarDivider'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="a blog by Johnson Yang">
      <p>
        I was born in Manhattan and spent my early childhood with my grandparents. 
        At seven, I moved to Emmaus to live with my parents. 
        After high school, I went to the University of Pittsburgh to study civil engineering.
        I now reside in Pittsburgh.
      </p>
      <BlackBarDivider />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage