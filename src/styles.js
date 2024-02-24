import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #d6cec1;
  width: 20%;
  min-height: 350px;
  padding: 10px;
  border: 1px solid #313335;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
