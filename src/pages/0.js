import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIntroPage = () => (
    <Layout pageTitle showTitle={false}>
    <p>This is the content of your blog post. Replace this with your actual writing.</p>
  </Layout>
);

export const Head = () => <Seo title="0" />;

export default BlogIntroPage;