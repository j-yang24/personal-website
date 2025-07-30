import React from "react";
import BlogCard from "./BlogCard";
import bridgeImage from '../images/post1/manhattan-bridge.png'
import trainImage from '../images/post2/southwest-train.jpg'
import cathyImage from '../images/post3/cathy.jpg'
import "./blogCard.css";

const blogPosts = [
    {
        imageSrc: cathyImage,
        title: "Death isn't the only goodbye in this life",
        summary: "A reflection on my college experience",
        date: "August 25th, 2025",
        slug: "college"
    },
    {
        imageSrc: trainImage,
        title: "West by Southwest",
        summary: "Traveling to San Franscisco by Train",
        date: "August 10th, 2025",
        slug: "west"
    },

    {
        imageSrc: bridgeImage,
        title: "Blog Post 0",
        summary: "An introduction to my blog",
        date: "June 24th, 2025",
        slug: "0"
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
                slug={post.slug}
            />
        ))}
    </div>
);

export default BlogGrid;
