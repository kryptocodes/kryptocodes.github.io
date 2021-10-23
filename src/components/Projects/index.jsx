import React from 'react'


const ProjectIndex = ({posts,i}) => {
    return (
        <div>
             <div className="lg:px-2 md:px-4 px-4 pb-5">
            <figure className="md:flex dark:bg-gray-900 shadow-lg dark:text-white bg-gray-200 dark:bg-opacity-50 rounded-xl md:p-0">
            {posts?.Image  ? 
            <img loading="lazy" className={`w-auto lg:w-1/2 ${i % 2 == 0 ? 'order-first' : 'order-last'} object-contain h-auto md:h-auto md:w-1/2 x-auto`} src={posts?.Image} alt="project" /> : "" }
            <div className="pt-6 p-4 md:p-8">
            
                <p className="lg:text-4xl pb-6 md:text-2xl text-xl font-semibold">
               {posts?.Name}
                </p>
                <a className="bg-blue-600  p-2 rounded-lg text-white">Tech Stack</a>

                <p className="pt-4 text-sm lg:text-lg md:text-lg pb-2">
                   {posts?.TechStack}
                 </p>
                <p className="text-xl font-semibold">
                    Description
                </p>
                <p className="text-sm pb-2 font-sans">
                    {posts?.Description}
                </p>
                <a className="text-blue-600 dark:text-yellow-300" href={posts?.Link}>Repository Link</a>
            </div>
          </figure>
          </div>
        </div>
    )
}









export default ProjectIndex