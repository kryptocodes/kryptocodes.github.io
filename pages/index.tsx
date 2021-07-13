import React from 'react'
import HeroIndex from '../components/hero';
import BlogPost from '../components/hero/blogPost';
import NavBar from '../components/nav';

export const NOTION_BLOG_ID = 'e92fcd11a75f4e9da334e22e291cbc02'

console.log(process.env.NEXT_PUBLIC_BLOG)

interface indexProps {

}


const index: React.FC<indexProps> = ({posts}) => {
    return (
      <>
        <NavBar/>
        <HeroIndex/>
        <BlogPost posts={posts}/>
      
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