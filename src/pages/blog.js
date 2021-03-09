import React from 'react'
import BlogHead from '../components/blog/blogPage'
import Wrapper from '../components/Wrapper'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
    return(
        <Wrapper title="Blog">
        <Style>
          <BlogHead data={data}/>
          </Style>
        </Wrapper>
    )
}

const Style = styled.div`
  padding:2rem 5rem;

  @media screen and (max-width: 960px) {
    padding:2rem 2rem;
  }
`







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