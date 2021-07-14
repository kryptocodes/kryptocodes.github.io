import React from "react";
import NavBar from "../components/nav";


const Projects: React.FC<any> = ({}) => {

    return (
    <>
      <NavBar title="Projects" />
      <div className="container px-2 lg:px-32">
        <h1>Projects</h1>
        <div className="p-5 justify-center">
    <div className=" w-full lg:max-w-full lg:flex">
      
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        
          <div className="text-gray-900 font-bold text-xl mb-2">Lorem.1</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div className="flex items-center">
        
        
        </div>
      </div>
    </div>
  </div>

       </div>

    </>
  );
};

export default Projects;
