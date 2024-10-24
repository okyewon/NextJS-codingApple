import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const MongoClient = require('mongodb').MongoClient;
    const client = await connectDB
    const db = client.db("forum")
    const result = await db.collection("post").find().toArray()
}

  return (
    <>{result}</>
  );
}
