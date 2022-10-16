import { User as UserType } from "types";

interface Props {
  user: UserType;
}

export function User({ user }: Props) {
  return <div>{user.name}</div>;
}
