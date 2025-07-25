import * as React from 'react'
import BlogLayout from '../components/BlogLayout'
import Seo from '../components/seo'
import Footer from '../components/Footer';
import Divider from '../components/Divider'
import * as styles from '../components/bloglayout.module.css'

const BlogIntroPage = () => (
    <BlogLayout pageTitle showTitle={false}>

    <h1 className={styles.header1}>Blog Post 0</h1>
    <h2 className={styles.header2}>An Introduction to my Blog</h2>
    <h3 className={styles.header3}>July 24th, 2025</h3>

    <p className={styles.paragraph}>My name is Johnson Yang and I’m an Asian born American from two Fuzhounese parents. As a child I grew up in Chinatown, New York all the way till I was in second grade. During that time, I lived with my grandparents and cousins— all six of us crammed into a one-bedroom apartment complex. Looking back, it didn’t really feel cramped at the time, but these days when I go back— everything feels so small in comparison.</p> 

    <p className={styles.paragraph}>Before the summer of second grade, my brother and I moved to Pennsylvania to be raised by our parents. I don’t remember feeling particularly sad over leaving, but I remember getting picked up by my dad and not trying to throw up during the two-hour car ride.</p>

    <p className={styles.paragraph}>From 2nd to 12th grade, I lived in Emmaus, Pennsylvania, where I would go to school, go to my parent’s restaurant, and come home. I never really questioned how I was being raised as it felt normal to me, and I didn’t really make any close friends in school, so I never got to compare how other people lived. </p>

    <p className={styles.paragraph}>College admissions rolled around, and I ended up accepting an offer to go to the University of Pittsburgh to study Environmental Engineering. I remember specifically choosing that major because I thought it felt my high school profile the best. I took a lot of CAD classes and wanted to become an architect, but not do 5 years of school. I’m glad I went to engineering and not architecture, because I think I would have been worse off as an architect. </p>

    <p className={styles.paragraph}>Before coming to college (and during my first semester of college), I was never passionate about things that got in the way of my addiction. I was addicted to video games, web surfing, and pornography. School came easy to me, so why should I try harder in it? My teachers always gave me great comments on how I was an “excellent student” on my report card. I remember a lot of my peers around me, always thought I was “smart” too. </p>

    <p className={styles.paragraph}>Looking back, I was never a “smart” or “excellent” student. I was just the student that did everything that was asked of them. I completed all homework assignments on time, showed up to class early, and had a good grasp on how to approach upcoming exams and essays. That flied in high school, where doing the bare minimum was above average. When college rolled already though, averages became C’s.</p>

    <p className={styles.paragraph}>I never pushed myself to be better though. When things become hard, I would just aimlessly continue to do the same things over and over again and not try to understand what I was doing wrong. I blamed everyone back then. Everything going wrong in my life was someone else’s fault and I had nothing to do with it. </p>

    <p className={styles.paragraph}>For example, I remember taking Geometry in my sophomore year of high school and blaming my teacher for having an outdated teaching style and having hard exams to my final grade of a C. I never sat down and did practice problems. I would just watch other people do examples online and try to memorize that specific solution. I skipped the fundamentals so I could complete my homework and go back to playing my video games.</p>

    <p className={styles.paragraph}>I loved Minecraft growing up. Specifically, I grew to love the multiplayer aspect of the game and played a lot of PvP styled mini games. Minecraft gave me satisfaction in seeing progress made in short periods of time. It gave me a sense of accomplishment and escape from reality. I spent all my free time playing it. </p>

    <p className={styles.paragraph}>I really wish I looked around me before I went to college. All my peers had so many life experiences they got to experience because they went outside. I just repeated the same process I always had for 10 years. Go to school, go to my parent’s restaurant, and go home. What a fucking life to live.</p>

    <p className={styles.paragraph}>Even though I can never reclaim the time I lost, I don’t think I can really regret it. I enjoyed most of my time playing Minecraft and making core memories that I still think about to this day. </p>

    <Divider />
    <Footer/>
  </BlogLayout>
  
);

export const Head = () => <Seo title="0" />;

export default BlogIntroPage;