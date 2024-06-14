import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ui from "../components/Ui";
import EditExpense from "../components/EditExpense";
import Signup from "../components/loginPage/Signup";
import Login from "../components/loginPage/Login";
import Mypage from "../components/mypage/Mypage";
import Layout from "./Layout";

function Router({ list, setList, user, setUser }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route path="ui" element={<Ui list={list} setList={setList} />} />
          <Route
            path="detail/:id"
            element={<EditExpense list={list} setList={setList} user={user} />}
          />
          <Route
            path="mypage"
            element={<Mypage user={user} setUser={setUser} />}
          />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
