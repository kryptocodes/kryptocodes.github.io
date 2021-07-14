import React from 'react'
import Link from "next/link";
import { NOTION_BLOG_ID } from '../ENV';


const index = ({posts}) => {
      return (
        <>
        
        {posts.map((post) => (
          <div key={post.id}>
          <Link href={`/blogs/${post.id}`} passHref>
            <div>{post.Name}</div>
          </Link>
          </div>
        ))}
      
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
  