import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: auto;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
 
  /* position: fixed; */

  @media screen and (min-width: 801px) {
    align-items: flex-start;
    justify-content: flex-start;
    border-right: 0.1rem solid black;
  }
`;
