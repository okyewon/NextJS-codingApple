import { fetchPost } from "@/util/database";

export async function getServerSideProps(context) {
  const post = await fetchPost(context.params.id);
  return {
    props: {
      post,
    },
  };
}

export default function Detail({ post }) {
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
