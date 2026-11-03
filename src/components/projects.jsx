import React from 'react'

function Projects() {
    return(
        <div>
            <section id ="projects" className = "bg-purple-100 px-5 py-16">


                <h2 className= "mb-8 text-center text-2xl font-bold text-slate-900">My Projects </h2>
                <div className="mx-auto grid max-w-5xl gap-8 md:gride-cols-3">
                
                
                <div className="rounded-xl bg-amber-50 py-6 shadow-md">
                    <h3 className= "text-xl font-semibold">Menu-Like </h3>
                    <p className="mt-2 text-slate-600">A simple restaurant website where you will be able to 
                        view available menu items and their prices. The website is built using HTML and CSS.
                    </p>
                    
                </div>


                <div className="rounded-xl bg-amber-50 p-6 shadow-md">
                    <h3  className= "text-xl font-semibold"><a href="https://taxiseat.netlify.app" target="_blank" rel="noopener noreferrer">Front Seat</a></h3>
                    <p className="mt-2 text-slate-600">A simple calculator application that helps front seat passengers with taxi maths. the application was built using HTML, CSS and Javascript </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-6 shadow-md">
                    <h3  className= "text-xl font-semibold">Quiz App</h3>
                    <p className="mt-2 text-slate-600">A simple quiz application that allows users to test their knowledge on various topics. The application was built using HTML, CSS and Javascript </p>
                </div>

            </div>
            </section>
    </div> 
    
            )
        }
        export default Projects
