import React from 'react'
import Home from '../components/landing/home'
import Wrapper from '../components/Wrapper'
import { graphql } from 'gatsby'
import BlogPost from '../components/landing/BlogPost'

const index = ({data}) => {
  return (
      <Wrapper title="Home">
        <div className="px-6">
        {Home()}
        <BlogPost data={data}/>
        </div>
      </Wrapper>
  )
}

export const query = graphql`
query HomeQuery  {
  blog: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
      excerpt
      id
    }
  }
}


`








export default index