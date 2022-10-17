import { User as UserType } from "types";
interface Props {
  user: UserType;
  onClick: (id: number) => void;
}

export function User({ user, onClick }: Props) {
  if (!user) return null;

  return (
    <div onClick={() => onClick(user.id)}>
      {user.name} {user.numberOfClicks !== 0 && `- ${user.numberOfClicks}`}
    </div>
  );
}
