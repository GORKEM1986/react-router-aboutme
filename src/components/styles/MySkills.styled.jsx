import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  background-image: url(https://cdn.pixabay.com/photo/2015/12/06/20/10/christmas-bauble-1079926__480.jpg);

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

export const IMG = styled.img`
  max-width: 35%;
  max-height: 35%;
  min-height: 30%;
  min-width: 30%;
`;
