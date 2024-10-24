import { fetchPost } from "@/util/database";

export async function getServerSideProps(context) {
  const post = await fetchPost(context.params.id);
  return {
    props: {
      post,
      id: context.params.id,
    },
  };
}

export default function Edit({ post, id }) {
  return (
    <div className="p-20">
      <h4 className="title">수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          defaultValue={post.title}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용을 입력하세요."
          defaultValue={post.content}
        />
        <br />
        <input
          style={{ display: "none" }}
          type="text"
          name="_id"
          defaultValue={post._id}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
