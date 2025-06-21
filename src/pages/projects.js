import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Footer from '../components/Footer';
import * as styles from '../styles/now.module.css';
import Divider from '../components/Divider'

const ProjectsPage = () => {
  return (
    <Layout pageTitle showTitle={false}>
      <div>
        <h1>Projects</h1>
        <p>Big things coming!</p>
      </div>

      <Divider />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />
export default ProjectsPage