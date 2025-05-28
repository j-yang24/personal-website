import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowPage = () => {
  return (
    <Layout pageTitle showTitle={false}>
      <div>
        <h1>Now</h1>
        <p>I'm currently living in Pittsburgh, working at <a href="https://www.mbakerintl.com" target="_blank" rel="noopener noreferrer">Michael Baker International</a> as a Bridge Software Systems Developer.
        </p>
        <p>I'm also pursuing a Master's Degree in Structural Engineering and Mechanics at the <a href="https://www.engineering.pitt.edu/academics/eagr/" target="_blank" rel="noopener noreferrer">University of Pittsburgh</a>.
        </p>
        <br></br>
        <p><i>Last updated on May 31st, 2025.</i></p>
      </div>
    </Layout>
    
  )
}


export const Head = () => <Seo title="Now" />

export default NowPage