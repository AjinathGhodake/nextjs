import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router: NextRouter = useRouter();
  const handleClick = () => {
    console.log(">>>>>>");
    router.push("./product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <br />
      <Link href="/profile" legacyBehavior>
        <a>Profile</a>
      </Link>
      <br />
      <Link href="/product" legacyBehavior>
        <a>Product</a>
      </Link>
      <br />
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
