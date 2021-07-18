import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'

const BlogHead = ({data}) => {
    const { posts } = data.blog
    const CardComponent = ({id,title,description,date}) => (
      <div className="container mt-5 my-5 text-white">
        <div
          className="rounded-lg bg-purple-500 dark:bg-blue-500 dark:bg-opacity-50 md:shadow-xl pt-5 pb-5 mx-2"
        >
          <div className="px-5">
              <Link to={id}>
            <a className="text-3xl pb-2">
              {title}
            </a>
            </Link>
            <p className="dark:text-gray-400">{date ? date : ''}</p>
            <p className="text-gray-200 font-sans pt-2">
              {description? `${description}` :
              ''}
            </p>
          </div>
        </div>
      </div>
    );
  
    return (
      <>
        <div className="container mx-auto px-6 lg:px-28 my-8 dark:text-white">
          <h1 className="text-2xl px-2 text-bold">Blogs</h1>
          {posts.map((v) => 
          <>
          <CardComponent id={v?.fields.slug}  title={v?.frontmatter.title} date={v?.frontmatter.date} description={v?.excerpt}/>
          </>
          )}
        </div>
      </>
    );
  };









export default BlogHead