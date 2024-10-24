import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  if (req.method == "POST") {
    if (!req.body.title.trim()) return res.status(200).json("제목을 쓰세요");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).json("저장완료");
  }
  return res.status(200).json(posts);
}
