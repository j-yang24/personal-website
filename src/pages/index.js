import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Divider from '../components/Divider'
import Seo from '../components/seo'
import BlogGrid from '../components/BlogGrid';
import Footer from '../components/Footer';
import * as styles from '../styles/index.module.css';


const IndexPage = () => {
  return (
    <Layout pageTitle="a blog by Johnson Yang">

      <div className={styles.headerRow}>
        <div>
          <p className={styles.siteTitle}>jytimes</p>
          <p className={styles.heading}>a blog by Johnson Yang</p>
        </div>
        <div className={styles.aboutBox}>
          <p className={styles.aboutText}>
            Reflections of my life&mdash; I'd like to write an autobiography before I die so I think this is a good start.
          </p>
          <br></br>
          <p className={styles.aboutText}>Feel free to reach out to me at johnsonyang[at]pitt.edu</p>
        </div>
      </div>

      <p className={styles.paragraph}>
        I grew up in Manhattan, where I spent my early childhood with my grandparents.
        When I was seven, I moved to the suburbs of Pennsylvania to live with my parents&mdash; helping out in the family restaurant after school.
        After high school, I attended the University of Pittsburgh, where I majored in Civil Engineering. {' '}
        These days, I live <Link className={styles.link} to="/now"> in Pittsburgh</Link>.
      </p>
      <Divider />

      <BlogGrid />

      <Divider />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage