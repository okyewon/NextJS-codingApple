import { fetchPosts } from "@/util/database";
import ListItem from "./ListItem";

export async function getServerSideProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function List({ posts }) {
  return (
    <div className="list-bg">
      {posts.map((post, idx) => {
        return <ListItem post={post} idx={idx} />;
      })}
    </div>
  );
}
