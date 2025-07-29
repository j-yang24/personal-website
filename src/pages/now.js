import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Footer from '../components/Footer';
import * as styles from '../styles/now.module.css';
import Divider from '../components/Divider'

const NowPage = () => {
  return (
    <Layout pageTitle showTitle={false}>
      <div>
        <h1>Now</h1>
        <p className={styles.paragraph}>
          I'm currently living in Pittsburgh, working at{' '}
          <a className={styles.link} href="https://www.mbakerintl.com" target="_blank" rel="noopener noreferrer">
            Michael Baker International
          </a>{' '}
          as a Bridge Software Systems Developer.
        </p>
        <p className={styles.paragraph}>
          I'm also pursuing a Master's Degree in Structural Engineering and Mechanics at the{' '}
          <a className={styles.link} href="https://www.engineering.pitt.edu/academics/eagr/" target="_blank" rel="noopener noreferrer">
            University of Pittsburgh
          </a>.
        </p>
        <br />
        <p className={styles.update}>Last update - June 2nd, 2025.</p>
      </div>
      <Divider />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Now" />
export default NowPage