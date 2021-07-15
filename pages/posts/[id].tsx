import { NotionRenderer,BlockMapType } from "react-notion";

import { getAllPosts } from '../../components/blog/index_post'
import NavBar from "../../components/nav";
import { DateFormat } from "../../components/util/DateFormat";


export async function getServerSideProps({ params: { id } }) {
  // Get all posts again
  const posts = await getAllPosts();
  
  // Find the current blogpost by slug
  const post = posts.find((t) => t.id === id);

  const blocks: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}


const PageParser = ({ post, blocks }) => {
  return(
  <>
  <NavBar/>
  {(!blocks || Object.keys(blocks).length === 0) ? <div>No blocks</div> : 
  <div className="container mx-auto dark:text-white px-8 pb-8 justify-content-center" style={{ maxWidth: 768 }}>
    <h1 className="text-4xl text-left pb-2 pt-10">{post?.Name}</h1>
    <p className="text-gray-400 pb-8">{DateFormat(post?.Date)}</p>
    <NotionRenderer blockMap={blocks} />
  
  </div>}
  </>)
};












export default PageParser