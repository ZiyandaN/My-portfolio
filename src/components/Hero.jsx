import React from 'react'
import profileImage from '../assets/profile.jpg'
import ReactImage from '../assets/React.jpg'
import TailwindImage from '../assets/Tailwind.jpg'
import JavascripttImage from '../assets/Javascript.jpg'
import CSSImage from '../assets/CSS.jpg'
import HTMLImage from '../assets/HTML.jpg'
function Hero() {
    return (
        <section className="flex items-center justify-between px-8 py-10">

            {/*left*/}
            <div>
                <h1 className="text-7xl font-bold">
                    Ziyanda Ndaba
                </h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Frontend Software Developer
                </h2>

                <p className="mt-4">
                    I started my software development journey in April 2026 with Maelsoft Academy. I am passionate about building projects and learning new skills.
                </p>
                 <a href='#projects' className='  rounded-lg  bg-purple-300 text-white hover:bg-gray-400 font-semibold'>See My Work</a>
                
                
                
                {/* the skills pics */}
                <h2 className="text-2xl font-semibold mt-4">My Skills</h2>
                <div className="flex space-x-4 mt-4">
                    <img
                        src={ReactImage}
                        alt="My react"
                        className="w-20 h-20 object-cover  rounded-full border-4 border-gray-500"
                    />
                    <img
                        src={TailwindImage}
                        alt="My tailwind"
                        className="w-20 h-20 object-cover  rounded-full border-4 border-gray-500"
                    />
                    <img
                        src={JavascripttImage}
                        alt="My javascript"
                        className="w-20 h-20 object-cover  rounded-full border-4 border-gray-500"
                    />
                    <img
                        src={CSSImage}
                        alt="My css"
                        className="w-20 h-20 object-cover  rounded-full border-4 border-gray-500"
                    />
                    <img
                        src={HTMLImage}
                        alt="My html"
                        className="w-20 h-20 object-cover  rounded-full border-4 border-gray-500"
                    />
                </div>

            </div>



        {/*right*/}
            <img
                src={profileImage}
                alt="My profile"
                className="w-150 h-150 object-cover  rounded-xl border-4 border-gray-500"
            />

        </section>
    )
}

export default Hero