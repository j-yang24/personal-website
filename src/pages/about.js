import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle showTitle={false}>
      <div>
        <h2>About</h2>
        <p>Talking about myself is quite hard— I guess this is why I started this blog. I was born in Chinatown, New York. I moved to Emmaus, Pennslyvania when I was 8 to live with my parents. </p>
        <h2>Now</h2>
        <p>Currently a student at University of Pittsburgh.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage