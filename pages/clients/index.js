import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "ajioz", name: "Ajiozi" },
    { id: "skyit", name: "SkyIT" },
    { id: "sandy", name: "Sandra" },
    { id: "hum", name: "Humphrey" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}>
              {client.name}
            </Link>
            {/* <Link href={`/clients/${client.id}`}> {client.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
