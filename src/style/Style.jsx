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
  background-color: ${(props) => (props.active ? "lightblue" : "white")};
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
  margin-top: 50px;
`;

export const OneBox = styled.div`
  padding: 100px;
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LoginForm = styled.form`
  background-color: wheat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 300px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  border-radius: 10px;
  background-color: white;
  font-size: 30px;
  gap: 50px;

  .id {
  }

  .LoginButton {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LoginInp = styled.input`
  width: 250px;
  height: 25px;
`;

export const LoginButton = styled.button`
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

export const HeaderBar = styled.section`
  padding: 10px;
  background-color: wheat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;

  .leftSide {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
  }

  .home {
    margin-right: 15px;
    text-decoration: none;
  }

  .profileBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
  }

  .profilePic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: white;
  }

  .logout {
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
  }
`;

export const MypageBox = styled.div`
  padding: 50px;
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  gap: 30px;

  .profile {
    width: 300px;
    height: 25px;
  }

  .update {
    width: 300px;
    height: 35px;
    background-color: rgb(0, 123, 255);
    color: white;
    border: none;
  }
`;
