import React from "react";
import { DateFormat } from "../util/DateFormat";

interface blogPostProps {}


const blogPost = ({posts}) => {
  const CardComponent = ({title,description,date}) => (
    <div className="container mt-5 my-5 text-white">
      <div
        className="rounded-lg bg-purple-500 dark:bg-blue-500 dark:bg-opacity-50 md:shadow-xl pt-5 pb-5 mx-2"
       
      >
        <div className="px-5">
          <h1 className="text-3xl pb-2">
            {title}
          </h1>
          <p className="dark:text-gray-400">{date ? DateFormat(date) : ''}</p>
          <p className="text-gray-200 font-sans pt-2">
            {description? `${description}... Read More` :
            ''}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container lg:px-28 my-8 dark:text-white">
        <h1 className="text-2xl text-bold">Recent Posts</h1>
        {posts.slice(0,2).map((v) => 
        <>
        <CardComponent  title={v?.Name} date={v?.Date} description={v?.Description}/>
        </>
        )}
      </div>
    </>
  );
};



export default blogPost;
