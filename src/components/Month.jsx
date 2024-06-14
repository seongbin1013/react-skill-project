import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MonthButton, MonthButtonContainer } from "../style/Style";

function Month({ selectedMonth, setSelectedMonth }) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
  };

  useEffect(() => {
    localStorage.setItem("Month", JSON.stringify(selectedMonth));
  }, [selectedMonth]);

  const Mbtn = months.map((data) => {
    return (
      <MonthButton
        active={data === selectedMonth}
        onClick={() => handleSelectedMonth(data)}
        key={data}
      >
        {data}월
      </MonthButton>
    );
  });
  return <MonthButtonContainer>{Mbtn}</MonthButtonContainer>;
}

export default Month;
