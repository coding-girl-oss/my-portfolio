import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="h-auto sm:h-80 w-full bg-green-50 my-20 flex flex-col sm:flex-row px-6 sm:px-0 py-5 sm:py-0 justify-around">
         <img className="h-80" src="https://incomparable-pavlova-48d9ef.netlify.app/assets/about--_l-P5RA.svg"/>
         <div className="flex flex-col justify-center items-center w-[40vw]">
            <h1 className="text-3xl font-bold">Code and coffee</h1>
            <br></br>
            <p>I'm Amna, a seasoned web developer with expertise
                 in React and component-based projects. With a year
                 of experience, I've mastered Redux for global state
                 management and wield Axios for seamless data fetching.
                 Let's collaborate and transform your ideas into digital brilliance!

            </p>
         </div>

      </div>
    </>
  )
}

export default Contact
