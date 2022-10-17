import React, { useState, useEffect } from "react";
import { User, SearchBar } from "components";
import { getUsers } from "dataGenerator";
import { useDebounce, usePrevious } from "hooks";
import { User as UserType } from "types";
import { Container, MainWrapper, SearchBarContainer } from "./Home.style";

export function Home() {
  const [initialUsers, setInitialUsers] = useState(getUsers());
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput);
  const prevDebouncedSearch = usePrevious(debouncedSearch);

  function onClick(id: number) {
    setUsers(
      users.map((user) => ({
        ...user,
        numberOfClicks:
          user.id === id ? user.numberOfClicks : user.numberOfClicks + 1,
      }))
    );
  }
  console.log(users);
  const prevInitialUsers = usePrevious(initialUsers);
  useEffect(() => {
    if (initialUsers.length && !prevInitialUsers) {
      setInitialUsers((prevState) =>
        prevState.map((user) => ({ ...user, numberOfClicks: 0 }))
      );
    }
  }, [initialUsers, prevInitialUsers]);

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
    <MainWrapper>
      <SearchBarContainer>
        <SearchBar
          value={searchInput}
          onChange={(value: string) => setSearchInput(value)}
        />
      </SearchBarContainer>
      <Container>
        {users.map((user) => (
          <User onClick={onClick} key={user.id} user={user} />
        ))}
      </Container>
    </MainWrapper>
  );
}
