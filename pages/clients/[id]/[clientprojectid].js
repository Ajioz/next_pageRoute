import React from "react";
import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const { query } = useRouter();
  console.log(query)
  return (
    <div>
      <h1> Client {query.id} Project {query.clientprojectid}</h1>
    </div>
  );
};

export default SelectedClientProject;
