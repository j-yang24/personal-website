import React from "react";
import BlogCard from "./BlogCard";
import worldImage from '../images/world.jpg'
import rianoImage from '../images/riano2.jpg'
import "./blogCard.css";

const blogPosts = [
    {
        imageSrc: worldImage,
        title: "Blog Post 0",
        summary: "An introduction to my blog",
        date: "May 31st, 2025",
    },
    {
        imageSrc: rianoImage,
        title: "Death isn't the only goodbye in this life",
        summary: "College reflection",
        date: "May 28st, 2025",
    },

    {
        imageSrc: rianoImage,
        title: "Test blog 2",
        summary: "hisssssssssss",
        date: "June 31st, 2025",
    },
];

const BlogGrid = () => (
    <div className="blog-grid">
        {blogPosts.map((post, index) => (
            <BlogCard
                key={index}
                imageSrc={post.imageSrc}
                title={post.title}
                summary={post.summary}
                date={post.date}
            />
        ))}
    </div>
);

export default BlogGrid;