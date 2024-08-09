import Link from "next/link";
import React from "react";

const ClientPage = () => {
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        <li>
          <Link href="/clients/1">client 1</Link>
        </li>
        <li>
          <Link href="/clients/2">client 2</Link>
        </li>
        <li>
          <Link href="/clients/3">client 3</Link>
        </li>
        <li>
          <Link href="/clients/4">client 4</Link>
        </li>
        <li>
          <Link href="/clients/5">client 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientPage;
