import React from 'react'
import { NOTION_BLOG_ID } from '../components/ENV';
import HeroIndex from '../components/hero';
import BlogPost from '../components/hero/blogPost';
import NavBar from '../components/nav';





interface indexProps {

}


const index: React.FC<indexProps> = ({posts}) => {
    return (
      <>
        <NavBar/>
        <div className="px-4">
        <HeroIndex/>
        <BlogPost posts={posts}/>
        </div>
      </>
    );
}

export const getAllPosts = async () => {
  return await fetch(
  `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
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

export default index