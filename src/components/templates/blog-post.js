import React from 'react'
import Wrapper from '../Wrapper'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Wrapper title={post.frontmatter.title}>
    <Style>
    <div className="container mx-auto justify-content-center">
      <div className="title text-center">
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      </div>
      <div className="content">
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
    </Style>
    </Wrapper>
  )
}

const Style = styled.div`
  color: white;
  .title{
    padding:2rem 0;

    h1,h2,h3,h4 {
      font-weight: 700;
    }
  }
  .content {
    padding: 2rem 5rem;
    h1 {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  img {
    width: 100%!important;

  }

  pre {
    padding: 1rem 0;
    box-shadow: 0px 0px 53px rgba(255, 255, 255, 0.10);
    font-family: 'Ubuntu Mono', monospace;
  }

  code {
    color: white;
    padding: 10px;
  }

  ul {
    list-style-type: decimal;
  }

  @media screen and (max-width: 960px) {
    .content {
      padding: 0 1rem;
    }
  }
`
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`