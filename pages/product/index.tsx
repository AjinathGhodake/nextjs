import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a href=""> Home</a>
      </Link>
      <h1>
        <Link href="product/1" legacyBehavior>
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        {" "}
        <Link href="product/2" legacyBehavior>
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        {" "}
        <Link href="product/3" legacyBehavior>
          <a>Product 3</a>
        </Link>
      </h1>
    </div>
  );
}
