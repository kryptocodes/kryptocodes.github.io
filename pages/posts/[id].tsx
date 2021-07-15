import { NotionRenderer } from "react-notion";

import { getAllPosts } from '../../components/blog/index_post'
import NavBar from "../../components/nav";
import { DateFormat } from "../../components/util/DateFormat";


export async function getStaticProps({ params: { id } }) {
  // Get all posts again
  const posts = await getAllPosts();
  
  // Find the current blogpost by slug
  const post = posts.find((t) => t.id === id);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

export async function getStaticPaths() {
    const table = await getAllPosts();
    return {
      paths: table.map((row) => `/posts/${row.id}`),
      fallback: true,
    };
  }

const PageParser = ({ post, blocks }) => {
  return(
  <>
  <NavBar/>
  <div className="container mx-auto dark:text-white px-8 pb-8 justify-content-center" style={{ maxWidth: 768 }}>
    <h1 className="text-4xl text-left pb-2 pt-10">{post.Name}</h1>
    <p className="text-gray-400 pb-8">{DateFormat(post.Date)}</p>
    <NotionRenderer blockMap={blocks} />
  
  </div>
  </>)
};












export default PageParser