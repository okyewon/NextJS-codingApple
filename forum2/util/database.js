import { MongoClient, ObjectId } from "mongodb";

const url =
  "mongodb+srv://okwonye:goodvision21@cluster0.gt8fc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // 최신 MongoDB 클라이언트 옵션 포함
let connectDB;

if (typeof window === "undefined") {
  // 브라우저에서 이 코드를 실행하지 않도록 함
  if (process.env.NODE_ENV === "development") {
    // 개발 환경에서만 글로벌 변수를 사용하여 연결을 캐싱
    if (!global._mongo) {
      global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
  } else {
    // 프로덕션 환경에서는 새 클라이언트를 생성
    connectDB = new MongoClient(url, options).connect();
  }
}

export { connectDB };

export async function fetchPosts() {
  const client = await connectDB;
  const db = client.db("forum");
  const posts = await db.collection("post").find().toArray();
  return JSON.parse(JSON.stringify(posts));
}

export async function fetchPost(id) {
  const client = await connectDB;
  const db = client.db("forum");
  const posts = await db.collection("post").findOne({ _id: new ObjectId(id) });
  return JSON.parse(JSON.stringify(posts));
}
