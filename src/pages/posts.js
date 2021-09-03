import React from 'react'
import BlogHead from '../components/blog/blogPage'
import Wrapper from '../components/Wrapper'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
    return(
        <Wrapper title="Blog">
          <BlogHead data={data}/>
        </Wrapper>
    )
}










export default Blog


export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
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