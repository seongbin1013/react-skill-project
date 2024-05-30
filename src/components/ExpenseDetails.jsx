import React, { useContext } from "react";
import { ExpenseContext, ExpenseDetailsContainer, StyledLink } from "./Style";
import { ContainerContext } from "../context/Containercontex";

function ExpenseDetails() {
  const { list, selectedMonth } = useContext(ContainerContext);
  // 월력별
  return (
    <ExpenseDetailsContainer>
      {list
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
