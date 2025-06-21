import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children, showTitle = true }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
              Projects
            </Link>
          </li> */}
          <li className={navLinkItem}>
            <Link to="/now" className={navLinkText}>
              Now
            </Link>
          </li>
        </ul>
      </nav>
      {/*showTitle && <header className={siteTitle}>{data.site.siteMetadata.title}</header>*/}
      {/*<h1 className={heading}>{pageTitle}</h1>*/}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
