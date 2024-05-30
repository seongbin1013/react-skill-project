import React, { useContext, useEffect } from "react";

import { MonthButton, MonthButtonContainer } from "./Style";
import { ContainerContext } from "../context/Containercontex";

function Month() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const { selectedMonth, setSelectedMonth } = useContext(ContainerContext);

  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
  };

  useEffect(() => {
    localStorage.setItem("Month", JSON.stringify(selectedMonth));
  }, [selectedMonth]);

  const Mbtn = months.map((data) => {
    return (
      <MonthButton
        $active={data === selectedMonth}
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
