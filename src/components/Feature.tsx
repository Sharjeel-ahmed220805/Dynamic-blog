import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-blue-600  text-red-600'>
        The Art of Frontend: <span className='animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-red-600 text-blue-600'>Code Meets Creativity</span>
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-slate-700 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">Hi, I am Sharjeel Ahmed, a passionate frontend developer with a deep love for crafting seamless user experiences on the web. With expertise in Next.js, JavaScript, and TypeScript, I am here to share insights, tips, and tutorials that help fellow developers stay ahead in the ever-evolving world of frontend development. Whether you are just starting out or looking to refine your skills, my blog is dedicated to breaking down complex concepts into practical, actionable knowledge. Let us learn and grow together in this exciting journey of coding and creativity!</p>


        <div className='mx-auto max-w-7xl px-5'>
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
          {[
            "Typescript",
            "CSS",
            "Javascript",
            "React.js",
            "Next.js",
            "Tailwind CSS"
          ].map((category, index) => (
            <div key={index}
            className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
<p className="text-center text-lg font-semibold">{category}</p>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-4"></div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}
