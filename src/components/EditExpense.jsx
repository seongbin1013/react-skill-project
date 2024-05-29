import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailContainer, GlobalStyle, OneBox } from "./Style";

// 1. 폼만들기 - 이미 만듦
// 2. useRef로 값 수정 navigate

function EditExpense({ list, setList }) {
  const dateRef = useRef();
  const itemRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  const navigate = useNavigate();

  // id: "25600f72-56b4-41a7-a9c2-47358580e2f8", ===
  const params = useParams();
  const find = list.find((item) => item.id === params.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedItem = {
      id: find?.id,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };

    const updateList = list.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      } else {
        return item;
      }
    });

    setList(updateList);

    navigate(-1);
  };

  const handleDelete = () => {
    const deleteHandler = list.filter((item) => item.id !== find.id);
    setList(deleteHandler);
    alert("정말 이 지출 항목을 삭제하시겠습니까?");

    navigate(-1);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <DetailContainer>
        <OneBox>
          <h2>수정 페이지</h2>
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="date">날짜:</label>
              <input
                type="text"
                id="date"
                ref={dateRef}
                defaultValue={find?.date}
              />
            </div>
            <div className="item">
              <label htmlFor="item">항목:</label>
              <input
                type="text"
                id="item"
                ref={itemRef}
                defaultValue={find?.item}
              />
            </div>
            <div className="item">
              <label htmlFor="amount">금액:</label>
              <input
                type="text"
                id="amount"
                ref={amountRef}
                defaultValue={find?.amount}
              />
            </div>
            <div className="item">
              <label htmlFor="description">내용:</label>
              <input
                type="text"
                id="description"
                ref={descriptionRef}
                defaultValue={find?.description}
              />
            </div>
            <button type="submit">수정</button>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={handleBack}>뒤로가기</button>
          </form>
        </OneBox>
      </DetailContainer>
    </>
  );
}

export default EditExpense;
