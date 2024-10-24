export default function Write() {
  return (
    <div className="p-20">
      <h4 className="title">글작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="제목을 입력하세요." />
        <br />
        <input type="text" name="content" placeholder="내용을 입력하세요." />
        <br />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
