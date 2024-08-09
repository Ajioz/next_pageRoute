import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const clientsProjectsPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>The client {query.id} Projects Page </h1>
      <ul>
        <li>
          <Link href={`/clients/${query.id}/Atom`}>project 1</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/Visual`}>project 2</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/e-commerce`}>project 3</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/fiat app`}>project 4</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/fitness app`}>project 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default clientsProjectsPage;
