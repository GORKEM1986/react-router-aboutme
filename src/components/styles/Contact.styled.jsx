import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  background-image: url(https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_1280.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1.5rem;
  border-radius: 25%;
  background-color: #2b626a;
  border: none;
  cursor: pointer;
  /* ... */
`;

export const A = styled.a`
  color: #8cd7da;
  text-decoration: none;
  font-size: 1.2rem;
  /* ... */
`;
