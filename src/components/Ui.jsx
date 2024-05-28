import React, { useEffect, useState } from "react";
import Expense from "./Expense";
import Month from "./Month";
import ExpenseDetails from "./ExpenseDetails";
import { Box, Container, GlobalStyle } from "./Style";

function Ui({ list, setList }) {
  // input 값들 상태변화
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  // 월력별
  const [selectedMonth, setSelectedMonth] = useState(1);

  // 이벤트
  const handleDate = (e) => setDate(e.target.value);
  const handleList = (e) => setItem(e.target.value);
  const handlecost = (e) => setAmount(e.target.value);
  const handleDetail = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // 날짜 형식을 검사하는 정규 표현식입니다.
    if (!date.match(dateRegex)) {
      // 날짜 형식이 정규 표현식과 일치하지 않으면
      return alert("날짜는 YYYY-MM-DD 형식이어야 합니다."); // 경고 메시지를 표시하고 함수를 종료합니다.
    }

    // 금액 유효성 isNaN((숫자일 경우 false,아닐경우 true))
    if (isNaN(amount) || amount <= 0) {
      return alert("금액을 입력해주세요 !");
    }

    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim())
      return alert("빈칸란을 입력해주세요");

    const newData = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    addlist(newData);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  const addlist = (newData) => {
    setList((prevTodos) => [...prevTodos, newData]);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Box>
          <form className="header" onSubmit={handleSubmit}>
            <div className="date">
              <p>날짜</p>
              <input
                type="text"
                placeholder="날짜"
                value={date}
                onChange={handleDate}
                className="dateInput"
                // formatDate={formatDate}
              />
            </div>
            <div className="list">
              <p>항목</p>
              <input
                type="text"
                placeholder="항목"
                value={item}
                onChange={handleList}
              />
            </div>
            <div className="amount">
              <p>금액</p>
              <input
                type="text"
                placeholder="금액"
                value={amount}
                onChange={handlecost}
              />
            </div>
            <div className="detail">
              <p>내용</p>
              <input
                type="text"
                placeholder="내용"
                value={description}
                onChange={handleDetail}
              />
            </div>
            <button type="submit">저장</button>
          </form>
        </Box>

        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Expense />
        <ExpenseDetails list={list} selectedMonth={selectedMonth} />
      </Container>
    </>
  );
}

export default Ui;
