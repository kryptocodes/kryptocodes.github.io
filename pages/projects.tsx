import React from "react";
import { NOTION_PROJECT_ID } from "../components/ENV";
import NavBar from "../components/nav";
import ProjectIndex from "../components/Projects";


const Projects: React.FC<any> = ({posts}) => {
    return (
    <>
      <NavBar title="Projects" />
      <div className="container lg:px-32">
        <h1 className="dark:text-white text-4xl p-4">Projects</h1>
        <p className="dark:text-white p-4 text-lg">Most of my projects can be found at Github</p>
        
        {posts.map((v,i) =>
         <ProjectIndex posts={v}/>
        )}
       </div>

    </>
  );
};

export const getAllPosts = async () => {
  return await fetch(
  `https://notion-api.splitbee.io/v1/table/${NOTION_PROJECT_ID}`
).then((res) => res.json());
}


export async function getStaticProps() {
const posts = await getAllPosts()
return {
  props: {
    posts
  },
};
}

export default Projects;
