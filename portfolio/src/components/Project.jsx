import React from 'react'

const Project = () => {
  return (
    <>
     <h1 className="text-3xl px-20 py-10 font-semibold">Web Creations</h1>
       <div className=" flex flex-wrap gap-20">
        <div className="bg-green-50 h-[500px] border-[4px] border-green-200 w-[400px] mx-6 rounded-lg transition-all hover:scale-105  ">
            <img className="h-60 w-full" src="https://incomparable-pavlova-48d9ef.netlify.app/assets/project3-DGFmQLMW.png" />
            <h1 className="text-2xl px-6 py-6 font-semibold">First project</h1>
            <p className="px-6">Experience Redux's power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
        </div>

        <div className="bg-green-50 h-[500px] border-[4px] border-green-200 w-[400px] mx-6 rounded-lg transition-all hover:scale-105  ">
            <img className="h-60 w-full" src="https://incomparable-pavlova-48d9ef.netlify.app/assets/project2-C_I_KWX5.png" />
            <h1 className="text-2xl px-6 py-6  font-semibold">Second project</h1> 
            <p className="px-6">Explore dynamic content manipulation with this project featuring a card displaying text. Increase word count with a click, revealing more content. Easily remove the card for a streamlined user experience.</p>
        </div>

           
       <div className="bg-green-50 h-[500px] border-[4px] border-green-200 mx-6 my-10 w-[400px] rounded-lg transition-all hover:scale-105  ">
            <img className="h-60 w-full" src="https://incomparable-pavlova-48d9ef.netlify.app/assets/project1-B_AbAgvW.png" />
            <h1 className="text-2xl px-6 py-6 font-semibold">Third project</h1>
            <p className="px-6">Discover stunning visuals with ease using this project powered by the Unsplash API. Utilizing Axios, search for images effortlessly through a sleek search bar interface.</p>
        </div>
        
        
       </div>
    </>
  )
}

export default Project
