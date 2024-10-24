import { fetchPosts } from "@/util/database";

export async function getServerSideProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const data = JSON.stringify(posts, null, 2);
  return <div></div>;
}
