import React from "react";
import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const { query, push } = useRouter();

    const loadProjectHandler = () => {
      push(`/clients/${query.id}`);
    };
  return (
    <div>
      <h1>
        Client {query.id} Project {query.clientprojectid}
      </h1>
      <button onClick={loadProjectHandler}>Back</button>
    </div>
  );
};

export default SelectedClientProject;
