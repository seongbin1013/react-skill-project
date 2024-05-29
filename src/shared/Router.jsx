import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ui from "../components/Ui";
import EditExpense from "../components/EditExpense";
import { ContainerContext } from "../context/Containercontex";

function Router({ list, setList }) {
  const data = useContext(ContainerContext);
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ui list={list} setList={setList} />} />
        <Route
          path="/detail/:id"
          element={<EditExpense list={list} setList={setList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
