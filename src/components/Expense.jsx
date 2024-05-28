import React from "react";
import styled from "styled-components";

const ExpenditurePart = styled.div`
  padding: 40px;
  gap: 30px;
  border: 1px solid black;
  margin-top: 30px;
  border-radius: 10px;
  background-color: wheat;
`;

function Expense() {
  return <ExpenditurePart>지출 그래프</ExpenditurePart>;
}

export default Expense;
