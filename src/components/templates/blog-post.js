import React from "react";
import Wrapper from "../Wrapper";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Wrapper title={post.frontmatter.title}>
        <div
          className="container mx-auto dark:text-white px-8 pb-8 justify-content-center"
          style={{ maxWidth: 768 }}
        >
          <h1 className="text-4xl pb-2 pt-10">
            {post.frontmatter.title}
          </h1>
          <div className="flex justify-start mx-auto">
          <small className="mr-4">{post.frontmatter.date}</small>
     
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          <small className="ml-1 text-sm">{post.timeToRead} Minutes</small>
</div>
          <Style>
            <div
              className="font-sans pt-2"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Style>
        </div>
    </Wrapper>
  );
}

const Style = styled.div`
  font-size: 16px;
  line-height: 1.5;
  h1 {
    font-size: 1.875em;
    margin-top: 1.4em;
    padding: 3px 2px;
    font-weight: 600;
  }
  h1:first-child {
    margin-top: 0;
  }
  h2 {
    font-size: 1.5em;
    margin-top: 1.1em;
  }
  h3 {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 1em;
  }
  p {
    padding: 3px 2px;
  }
  blockquote {
    white-space: pre-wrap;
    border-left: 3px solid currentcolor;
    padding: 0 0.9em;
    margin: 0;
    font-size: 1.2em;
  }

  ul {
    margin: 0;
    padding-top: 1em;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
    list-style-type: disc;
    padding-inline-start: 1.7em;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul > li {
    padding-left: 0.1em;
  }

  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
  }
  
  table {
    width: 100%;
    border-left: none;
    border-right: none;
    border-spacing: 0px;
    white-space: nowrap;
  }

  th,
  td {
    font-weight: normal;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    min-height: 1.5em;
    text-align: left;
    font-size: 14px;
  }
  

  
  th {
    font-size: 14px;
  }
  
  td:first-child,
  th:first-child {
    border-left: 0;
  }
  
  td:last-child,
  th:last-child {
    border-right: 0;
  }
  pre {
    font-size: 85%;
  }
  
  pre {
    color: white;
    padding: 30px 16px 30px 20px;
    margin: 4px 0;
    border-radius: 3px;
    tab-size: 2;
    display: block;
    box-sizing: border-box;
    overflow-x: scroll;
    background: #374151;
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
  }
 
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    min-height: auto;
  }

  a {
    font-weight: 600;
    color: #ffc107;
    text-decoration: none;
  }

 //add style to class light 
  .light {
    color: #374151;
  }

`;
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
