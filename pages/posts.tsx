import React from 'react'
import BlogPostIndex from '../components/blog/blogPost';
import { NOTION_BLOG_ID } from '../components/ENV';
import NavBar from '../components/nav';

interface aboutProps {
    posts: [] | any
}

const Blog: React.FC<aboutProps> = ({posts}) => {
        return (
            <>
                <NavBar/>
                <BlogPostIndex posts={posts}/>
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

export default Blog