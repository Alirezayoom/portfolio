import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <Link href="./About">ABOUT </Link>
      <Link href="./Blog">BLOG </Link>
    </>
  );
}
