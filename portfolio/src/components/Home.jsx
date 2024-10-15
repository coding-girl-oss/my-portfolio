import React from 'react'

const Home = () => {
  return (
   <>
    <div className="h-[100vh] bg-green-100"> 

    <div className="container h-80 w-full mx-auto py-20  flex justify-around ">
        <div className="flex flex-col mx-5 sm:mx-0  gap-4 py-14 ">
            <h1 className="text-6xl font-bold" >I'm Amna</h1>
            <p className="text-2xl">Front-End Developer</p>
            <p className="text-1xl">Turning ideas into interative reality</p>
            <div className="flex gap-4">
                <img className="h-6" src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"/>
                <img className="h-6" src="https://cdn-icons-png.flaticon.com/128/61/61109.png"/>
                <img className="h-6" src="https://cdn-icons-png.flaticon.com/128/25/25347.png" />
            </div>
        </div>
        <div className="invisible sm:visible">
            <img className=" sm:h-80" src="https://incomparable-pavlova-48d9ef.netlify.app/assets/hero-BSlV7gro.svg"/>
 </div>
 </div>
 </div>
   </>
  )
}

export default Home
