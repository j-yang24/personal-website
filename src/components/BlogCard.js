import * as React from 'react'
import { Link } from 'gatsby';

const BlogCard = ({ imageSrc, title, summary, date, slug }) => (
  <div className="blog-container">
    <div className="blog-row">
      <Link to={slug} className="blog-button">
        <div className="blog-image-container">
          <img className="blog-image" src={imageSrc} alt={title} />
          <div className="blog-date">{date}</div>
        </div>
        <div className="blog-header">{title}</div>
        <div className="blog-summary">{summary}</div>
      </Link>
    </div>
  </div>
);

export default BlogCard;