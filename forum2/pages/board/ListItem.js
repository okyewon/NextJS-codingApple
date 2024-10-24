"use client";

import Link from "next/link";

export default function ListItem({ post, idx }) {
  return (
    <div className="list-item" key={idx}>
      <Link href={`/detail/${post._id}`}>
        <h4>{post.title}</h4>
      </Link>
      <Link href={`/edit/${post._id}`}>✏</Link>
      <span
        className="btn_delete"
        onClick={(e) => {
          fetch("/api/post/delete", {
            method: "DELETE",
            body: post._id,
          })
            .then((r) => {
              if (r.status == 200) {
                // 서버에서 보낸 메세지 출력
                return r.json();
              } else {
                //서버가 에러코드전송시 실행할코드
                alert("삭제에 실패했습니다!");
              }
            })
            .then((result) => {
              //성공시 실행할코드
              e.target.parentElement.style.opacity = 0;
              setTimeout(() => {
                e.target.parentElement.style.display = "none";
              }, 1000);
            })
            .catch((error) => {
              //인터넷문제 등으로 실패시 실행할코드
              console.log(error);
            });
        }}
      >
        🗑
      </span>
      <p>{post.content}</p>
    </div>
  );
}
