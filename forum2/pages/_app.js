import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="navbar">
        <Link href={"/"} className="logo">
          Appleforum
        </Link>
        <Link href={"/board/list"}>List</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
