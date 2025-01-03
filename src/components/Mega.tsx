import React from 'react'
import BlogCard from '../components/BlogCard';


export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Mastering Responsive Design with Tailwind CSS: Tips and Tricks",
      description: "Dive deep into creating responsive and adaptive web designs using Tailwind CSS. This guide will cover best practices, utility classes for breakpoints, and strategies for designing websites that look great on all devices.",
      date: "2024-12-22",
      imageUrl: "../images/blog1.jpg",
    },
    {
      id: "2",
      title: "How TypeScript Enhances React.js Development: A Comprehensive Guide",
      description: "Explore how TypeScript brings type safety, improved developer experience, and better maintainability to React.js projects. Learn through examples how to type components, hooks, and props effectively.",
      date: "2024-12-23",
      imageUrl: "../images/blog2.jpg",
    },
    {
      id: "3",
      title: "Next.js for Beginners: Building Your First Full-Stack Application",
      description: "A step-by-step tutorial for newcomers to Next.js. Learn how to set up a project, integrate server-side rendering, and create your first full-stack application using Next.js' powerful features.",
      date: "2024-12-24",
      imageUrl: "../images/blog3.jpg",
    },
    {
      id: "4",
      title: "CSS vs Tailwind CSS: Which Should You Choose?",
      description: "Compare traditional CSS with the modern utility-first approach of Tailwind CSS. This post highlights the pros and cons of each, helping developers decide the best fit for their projects.",
      date: "2024-12-25",
      imageUrl: "../images/blog4.jpg",
    },
    {
      id: "5",
      title: "Optimizing React.js Applications for Performance",
      description: "Learn techniques to improve the performance of your React.js applications. Topics include optimizing renders, using React.memo, and implementing lazy loading for better user experiences.",
      date: "2024-12-26",
      imageUrl: "../images/blog5.jpg",
    },
    {
      id: "6",
      title: "Top 10 JavaScript Features Every Frontend Developer Should Know",
      description: "Stay ahead in frontend development by mastering these essential JavaScript features, including ES6+ syntax, async/await, destructuring, and more.",
      date: "2024-12-27",
      imageUrl: "../images/blog6.jpg",
    },
    {
      id: "7",
      title: "State Management in React: From useState to Redux",
      description: "This guide walks through the various state management options in React, from built-in hooks like useState and useReducer to more advanced tools like Redux and Zustand.",
      date: "2024-12-28",
      imageUrl: "../images/blog7.jpg",
    },
    {
      id: "8",
      title: "Building SEO-Friendly Websites with Next.js",
      description: " Leverage Next.js to build highly SEO-optimized websites. Learn about server-side rendering, dynamic routing, and how to use metadata for better search engine rankings.",
      date: "2024-12-29",
      imageUrl: "../images/blog8.jpg",
    },
    {
      id: "9",
      title: "Animating Your UI with CSS and JavaScript: A Step-by-Step Tutorial",
      description: "Bring life to your web applications by learning to create animations using CSS transitions and JavaScript. The tutorial includes practical examples and performance optimization tips.",
      date: "2024-12-30",
      imageUrl: "../images/blog9.jpg",
    },
    {
      id: "10",
      title: "How to Structure Your Frontend Projects for Scalability",
      description: "A guide to organizing your frontend codebase for long-term scalability. Learn about folder structures, modular code practices, and techniques for maintaining clean, reusable code.",
      date: "2024-12-31",
      imageUrl: "../images/blog10.jpg",
    },




 ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change"> Exporing the World of Frondend Developing</h1>
      
      <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post,index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
