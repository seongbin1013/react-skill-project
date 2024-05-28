import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: #f0f0f0; 
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 50px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  background-color: wheat;

  .header {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .header input {
    border-radius: 5px;
    margin-top: 10px;
    height: 30px;
    width: 200px;
  }

  .header button {
    height: 40px;
    width: 50px;
  }
`;

export const MonthButtonContainer = styled.div`
  padding: 40px;
  gap: 30px;
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 10px;
  background-color: wheat;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  justify-content: center;
  align-items: center;
`;

export const MonthButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${(props) => (props.$active ? "lightblue" : "white")};
`;

export const ExpenseDetailsContainer = styled.div`
  padding: 40px;
  gap: 30px;
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 10px;
  background-color: wheat;
`;

export const ExpenseContext = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  .amount {
  }
  .date {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 800px;
  }
`;

export const DetailContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OneBox = styled.div`
  padding: 100px;
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;

  .date {
    margin: 10px 0px;
  }

  .item {
    margin-bottom: 10px;
  }
  .amount {
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
