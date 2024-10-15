import React from 'react'

const About = () => {
  return (
    <>
     <h1 className="text-3xl px-20 py-16 font-semibold">Tech Stack</h1>
     <div className="h-auto sm:h-80 w-full bg-green-50 -my-8 flex flex-col justify-center items-center sm:flex-row px-4 gap-4 ">
        <div className="flex flex-col gap-2 py-4 ">
            <img className="h-16 w-16" src="https://cdn-icons-png.flaticon.com/128/1051/1051328.png"/>
            <h1 className="text-1xl font-semibold">HTML&CSS</h1>
            <p>Highly skilled in HTML & CSS, adeptly crafting 
                visually appealing and responsive websites
                 for optimal user experiences.</p>
        </div>
        

        <div className="flex flex-col py-4 ">
            <img className="h-16 w-16" src="https://cdn-icons-png.flaticon.com/128/12658/12658486.png"/>
            <h1 className="text-1xl font-semibold">Javascript</h1>
            <p>Expertise in JavaScript, building interactive 
                and dynamic web applications with a focus on
                 seamless user interactions and functionality</p>
        </div>
        <div className="flex flex-col py-4">
            <img className="h-16 w-16" src="https://cdn-icons-png.flaticon.com/128/3393/3393920.png"/>
            <h1 className="text-1xl font-semibold">React</h1>
            <p>Advanced proficiency in React, developing
                 efficient and interactive front-end 
                 applications with a strong emphasis 
                 on component-based architecture.</p>
        </div>

       
     </div>
    </>
  )
}

export default About
