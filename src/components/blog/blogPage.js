import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'

const BlogHead = ({ data }) => {
    const { posts } = data.blog
    return(
        <Style>
        <div className="row mx-auto justify-content-center">
        <div className="card px-2 text-white bg-transparent">
        {posts.map(post => (
            <Link to={post.fields.slug}>
            <article key={post.id} className="content">
                <h2>{post.frontmatter.title}</h2>
              <small className="ml-auto">
              {post.frontmatter.date}
              </small>
            </article>
            </Link>
          ))}
  
          </div>
          </div>
          </Style>
    )
}

const Style = styled.div`
    a {
        text-decoration: none;
        &:hover h2 {
            color:#F0860C;
        }
    }
    h2 {
        font-size: 1.5rem;
        font-weight:600;
        color:#F0860C;
    }
    small {
        color: white;
    }

    .content {
        margin-bottom:1rem;
        border: 2px solid #F0860C;
        padding:20px;

        &:hover {
            background: white;
            color:black;

            small {
                color: black;
            }
        }
    }

`







export default BlogHead