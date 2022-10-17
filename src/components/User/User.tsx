import { useState } from "react";

import { User as UserType } from "types";
import CloseIcon from "environment/icons/close.svg";
import { ActionsContainer, Container, UserCounter, Img } from "./User.style";
interface Props {
  user: UserType;
  onClick: (id: number) => void;
}

export function User({ user, onClick }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  if (!user) return null;
  return (
    <Container>
      <div style={{ cursor: "pointer" }} onClick={() => onClick(user.id)}>
        {user.name}
      </div>
      <ActionsContainer>
        <UserCounter visible={user.numberOfClicks !== 0}>
          {user.numberOfClicks !== 0 && ` ${user.numberOfClicks}`}{" "}
        </UserCounter>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Img alt="delete" visible={isHovering} src={CloseIcon} />
        </div>
      </ActionsContainer>
    </Container>
  );
}
