import styled, { css } from "styled-components";

interface UserCounterProps {
  visible: boolean;
}

export const Container = styled.div`
  border: 0.1rem solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  padding: 0.3rem;
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  :hover {
    background-color: #F0F8FF ;
  }
`;

export const UserCounter = styled.div<UserCounterProps>`
  border-radius: 4rem;
  background: grey;
  padding: 0.2rem;
  margin-right: 0.3rem;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img<UserCounterProps>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
