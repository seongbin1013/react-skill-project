import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useState } from "react";
import axios from "axios";

// ExpenseDetails
const FakeDatas = [];

function App() {
  const [list, setList] = useState(FakeDatas);
  const [user, setUser] = useState(null);

  // authorization 속성 정의
  useEffect(() => {
    const getUserInfo = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;
      const response = await axios.get(
        `https://moneyfulpublicpolicy.co.kr/user`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      setUser(response.data);
    };
    getUserInfo();
  }, []);

  return <Router list={list} setList={setList} user={user} setUser={setUser} />;
}

export default App;
