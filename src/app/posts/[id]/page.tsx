'use client';
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [ 
  {
    id: "1",
    title: "Mastering Responsive Design with Tailwind CSS: Tips and Tricks",
    description: "Dive deep into creating responsive and adaptive web designs using Tailwind CSS. This guide will cover best practices, utility classes for breakpoints, and strategies for designing websites that look great on all devices.",
    imageUrl: "../images/blog1.jpg",
  },
  {
    id: "2",
    title: "How TypeScript Enhances React.js Development: A Comprehensive Guide",
    description: "Explore how TypeScript brings type safety, improved developer experience, and better maintainability to React.js projects. Learn through examples how to type components, hooks, and props effectively.",
    imageUrl: "../images/blog2.jpg",
  },
  {
    id: "3",
    title: "Next.js for Beginners: Building Your First Full-Stack Application",
    description: "A step-by-step tutorial for newcomers to Next.js. Learn how to set up a project, integrate server-side rendering, and create your first full-stack application using Next.js' powerful features.",
    imageUrl: "../images/blog3.jpg",
  },
  {
    id: "4",
    title: "CSS vs Tailwind CSS: Which Should You Choose?",
    description: "Compare traditional CSS with the modern utility-first approach of Tailwind CSS. This post highlights the pros and cons of each, helping developers decide the best fit for their projects.",
    imageUrl: "../images/blog4.jpg",
  },
  {
    id: "5",
    title: "Optimizing React.js Applications for Performance",
    description: "Learn techniques to improve the performance of your React.js applications. Topics include optimizing renders, using React.memo, and implementing lazy loading for better user experiences.",
    imageUrl: "../images/blog5.jpg",
  },
  {
    id: "6",
    title: "Top 10 JavaScript Features Every Frontend Developer Should Know",
    description: "Stay ahead in frontend development by mastering these essential JavaScript features, including ES6+ syntax, async/await, destructuring, and more.",
    imageUrl: "../images/blog6.jpg",
  },
  {
    id: "7",
    title: "State Management in React: From useState to Redux",
    description: "This guide walks through the various state management options in React, from built-in hooks like useState and useReducer to more advanced tools like Redux and Zustand.",
    imageUrl: "../images/blog7.jpg",
  },
  {
    id: "8",
    title: "Building SEO-Friendly Websites with Next.js",
    description: " Leverage Next.js to build highly SEO-optimized websites. Learn about server-side rendering, dynamic routing, and how to use metadata for better search engine rankings.",
    imageUrl: "../images/blog8.jpg",
  },
  {
    id: "9",
    title: "Animating Your UI with CSS and JavaScript: A Step-by-Step Tutorial",
    description: "Bring life to your web applications by learning to create animations using CSS transitions and JavaScript. The tutorial includes practical examples and performance optimization tips.",
    imageUrl: "../images/blog9.jpg",
  },
  {
    id: "10",
    title: "How to Structure Your Frontend Projects for Scalability",
    description: "A guide to organizing your frontend codebase for long-term scalability. Learn about folder structures, modular code practices, and techniques for maintaining clean, reusable code.",
    imageUrl: "../images/blog10.jpg",
  },

];

interface PostProps {
  params: { id: string };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">
        POST NOT FOUND
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5 bg-slate-100">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center animate-color-change">
        {post.title}
      </h1>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}


