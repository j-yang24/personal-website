import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIntroPage = () => (
  <Layout pageTitle="Blog Post 0" showTitle={false}>
    <p>This is the content of your blog post. Replace this with your actual writing.</p>
  </Layout>
);

export const Head = () => <Seo title="b1" />;

export default BlogIntroPage;