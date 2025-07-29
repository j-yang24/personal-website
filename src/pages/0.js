import * as React from 'react'
import BlogLayout from '../components/BlogLayout'
import Seo from '../components/seo'
import Footer from '../components/Footer';
import Divider from '../components/Divider'
import * as styles from '../components/bloglayout.module.css'
import cathyImage from '../images/post3/cathy.jpg'

const BlogPage = () => (
  <BlogLayout pageTitle showTitle={false}>



    <h3 className={styles.header3}>July 24th, 2025</h3>
    <h1 className={styles.header1}>Blog Post 0</h1>
    <h2 className={styles.header2}>An Introduction to my Blog</h2>



    <div className={styles.aboutBox}>
      <p className={styles.aboutText}>
        Big things start here.
        
      </p>
    </div>


    <p className={styles.paragraph}>My name is Johnson Yang and I’m an Asian born American from two Fuzhounese parents. As a child I grew up in Chinatown, New York all the way till I was in second grade. During that time, I lived with my grandparents and cousins— all six of us crammed into a one-bedroom apartment complex. Looking back, it didn’t really feel cramped at the time, but these days when I go back— everything feels so small in comparison.</p>


    <figure>
      <img className={styles.img} src={cathyImage} alt='cathy' />
      <figcaption className={styles.caption}>This is a test caption</figcaption>
    </figure>

    <Divider />
    <Footer />
  </BlogLayout>

);

export const Head = () => <Seo title="0" />;

export default BlogPage;