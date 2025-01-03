import React from 'react'

export default function AuthorCard() {
  return (
    <div className="bg-slate-300 shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">

        <img
        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500"
        src="../images/powder.jpg"
        alt="Author Image"/>

        <div>
          <h3 className="text-xl font-bold"> Sharjeel Ahmed</h3>
          <p className="text-slate-500"> Frontend Developer | Video Editor</p>
        </div>

      </div>
      
      <p className="mt-4 text-slate-800 leading-relaxed">
      My name is Sharjeel Ahmed, and I specialize in frontend programming with a strong foundation in modern web technologies. With expertise in Next.js, JavaScript, and TypeScript, I have developed dynamic, scalable, and user-friendly web applications. My passion lies in creating seamless user experiences, leveraging the latest tools and frameworks to deliver innovative solutions. I am always eager to learn and adapt to new challenges in the ever-evolving field of frontend development.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
        href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          GitHub
        </a>
        <a
        href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
