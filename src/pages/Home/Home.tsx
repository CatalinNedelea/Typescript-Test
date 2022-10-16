import React, { useState, useEffect } from "react";
import { User, SearchBar } from "components";
import { getUsers } from "dataGenerator";
import { useDebounce, usePrevious } from "hooks";

export function Home() {
  const initialUsers = getUsers();
  const [users, setUsers] = useState(initialUsers);
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput);
  const prevDebouncedSearch = usePrevious(debouncedSearch);

  useEffect(() => {
    if (debouncedSearch) {
      setUsers(
        initialUsers.filter((user) =>
          user.name.toUpperCase().includes(debouncedSearch.toUpperCase())
        )
      );
    } else if (!debouncedSearch && prevDebouncedSearch) {
      setUsers(initialUsers);
    }
  }, [debouncedSearch]);

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={(value: string) => setSearchInput(value)}
      />
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}
