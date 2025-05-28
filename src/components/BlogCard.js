import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const BlogCard = ({ imageSrc, title, summary, date }) => (
  <div className="blog-container">
    <div className="blog-row">
      <button className="blog-button">
        <div className="blog-image-container">
          <img className="blog-image" src={imageSrc} alt={title} />
          <div className="blog-date">{date}</div>
        </div>
        <div className="blog-header">{title}</div>
        <div className="blog-summary">{summary}</div>
      </button>
    </div>
  </div>
);

export default BlogCard;