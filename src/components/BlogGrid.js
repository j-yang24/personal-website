import React from "react";
import BlogCard from "./BlogCard";
import cathyImage from '../images/cathy.jpg'
import bridgeImage from '../images/manhattan-bridge.png'
import trainImage from '../images/southwest-train.jpg'
import rianoImage from '../images/riano2.jpg'
import darkImage from '../images/dark.jpg'
import "./blogCard.css";

const blogPosts = [
    {
        imageSrc: cathyImage,
        title: "Death isn't the only goodbye in this life",
        summary: "A reflection on my college experience",
        date: "August 20th, 2025",
    },
    {
        imageSrc: trainImage,
        title: "West by Southwest",
        summary: "Traveling to San Franscisco by Train",
        date: "June 16th, 2025",
    },

    {
        imageSrc: bridgeImage,
        title: "Blog Post 0",
        summary: "An introduction to my blog",
        date: "May 31st, 2025",
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