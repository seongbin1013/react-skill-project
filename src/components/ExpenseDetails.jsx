import React from "react";
import {
  ExpenseContext,
  ExpenseDetailsContainer,
  StyledLink,
} from "../style/Style";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "./lib / api/expense";

function ExpenseDetails({ selectedMonth }) {
  const {
    data: expense = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["expense"], queryFn: getExpenses });
  if (isLoading) {
    return <div>로당중 입니다</div>;
  }

  return (
    <ExpenseDetailsContainer>
      {expense
        .filter((data) => parseInt(data.date.split("-")[1]) === selectedMonth)
        .map((data) => {
          return (
            <StyledLink
              key={data.id}
              to={`/detail/${data.id}`}
              className="custom-link"
            >
              <ExpenseContext>
                <div className="onebox">
                  <div className="date">{data.date}</div>
                  <div className="item">
                    {data.item} - {data.description}
                  </div>
                </div>
                <div className="amount">{data.amount}원</div>
              </ExpenseContext>
            </StyledLink>
          );
        })}
    </ExpenseDetailsContainer>
  );
}

export default ExpenseDetails;
