import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle showTitle={false}>
      <div>
        <h2>About</h2>
        <p>Currently a student at University of Pittsburgh.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage