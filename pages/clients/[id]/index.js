import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const clientsProjectsPage = () => {
  const { query, push } = useRouter();
  console.log(query);

  const loadProjectHandler = () => {
    push(`/clients`);
  };

  return (
    <div>
      <h1>The client {query.id} Projects Page </h1>
      <ul>
        <li>
          <Link href={`/clients/${query.id}/Atom`}>Atom Sparo</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/Visual`}>Visual 3D</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/e-commerce`}>Commerce Mart</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/fiat-app`}>Fiat App</Link>
        </li>
        <li>
          <Link href={`/clients/${query.id}/fitness-app`}>Fitness App</Link>
        </li>
      </ul>

      <button onClick={loadProjectHandler}>Back</button>
    </div>
  );
};

export default clientsProjectsPage;
