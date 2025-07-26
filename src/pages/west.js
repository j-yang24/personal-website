import * as React from 'react'
import BlogLayout from '../components/BlogLayout'
import Seo from '../components/seo'
import Footer from '../components/Footer';
import Divider from '../components/Divider'
import * as styles from '../components/bloglayout.module.css'

const BlogPage = () => (
    <BlogLayout pageTitle showTitle={false}>

    <h3 className={styles.header3}>August 1st, 2025</h3>
    <h1 className={styles.header1}>West by Southwest</h1>
    <h2 className={styles.header2}>Traveling to San Franscisco by Train</h2>

    <p className={styles.paragraph}>My name is Johnson Yang and I’m an Asian born American from two Fuzhounese parents. As a child I grew up in Chinatown, New York all the way till I was in second grade. During that time, I lived with my grandparents and cousins— all six of us crammed into a one-bedroom apartment complex. Looking back, it didn’t really feel cramped at the time, but these days when I go back— everything feels so small in comparison.</p> 

    <Divider />
    <Footer/>
  </BlogLayout>
);

export const Head = () => <Seo title="west " />;

export default BlogPage;