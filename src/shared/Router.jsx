import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ui from "../components/Ui";
import EditExpense from "../components/EditExpense";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ui />} />
        <Route path="/detail/:id" element={<EditExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
