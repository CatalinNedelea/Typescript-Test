import React from "react";

import { User } from "components";
import { getUsers } from "dataGenerator";

export function Home() {
  const users = getUsers();

  return (
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  );
}
